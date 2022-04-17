import { mocked } from 'ts-jest/utils';
import requestData from './requestData';

interface MockData {
    id: string;
    symbol: string;
    name: string;
}

global.fetch = jest.fn(() =>
    Promise.resolve({
        status: 200,
        json: () =>
            Promise.resolve({
                id: 'tether',
                symbol: 'usdt',
                name: 'Tether',
            }),
    }),
) as jest.Mock;

process.env.DISABLE_MOCKED_WARNING = 'true';

describe('requestData', () => {
    beforeEach(() => {
        mocked(fetch).mockClear();
    });

    it('success responce', async () => {
        const rate = await requestData<MockData>('/some_url');
        expect(rate.id).toEqual('tether');
        expect(rate.symbol).toEqual('usdt');
        expect(rate.name).toEqual('Tether');
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('failure responce', async () => {
        mocked(fetch).mockImplementationOnce(() => Promise.reject('API is down'));
        try {
            await requestData<MockData>('/some_url');
        } catch (error) {
            expect(error).toEqual('API is down');
        }
    });
});
