import getErrorMessage from './getErrorMessage';

describe('getErrorMessage helper', () => {
    it('expected input', () => {
        expect(getErrorMessage('Error 2')).toEqual('ERROR 2');
        expect(getErrorMessage(new Error('Some error'))).toEqual('Some error');
    });

    it('unexpected input', () => {
        expect(getErrorMessage(undefined)).toEqual(undefined);
        expect(getErrorMessage(null)).toEqual(undefined);
        expect(getErrorMessage({})).toEqual(undefined);
        expect(
            getErrorMessage({
                error: 'Some error',
            }),
        ).toEqual(undefined);
    });
});
