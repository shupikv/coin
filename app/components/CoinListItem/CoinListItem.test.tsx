import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { Coin } from '../../models';
import CoinListItem from './CoinListItem';

const itemData: Coin = {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    current_price: 2818.48,
    market_cap: 339465441259,
    market_cap_rank: 2,
    fully_diluted_valuation: null,
    total_volume: 8111404525,
    high_24h: 2844.9,
    low_24h: 2793.02,
    price_change_24h: 8.39,
    price_change_percentage_24h: 0.29871,
    market_cap_change_24h: 776786376,
    market_cap_change_percentage_24h: 0.22935,
    circulating_supply: 120413495.249,
    total_supply: null,
    max_supply: null,
    ath: 4228.93,
    ath_change_percentage: -33.33623,
    ath_date: '2021-12-01T08:38:24.623Z',
    atl: 0.381455,
    atl_change_percentage: 738954.7353,
    atl_date: '2015-10-20T00:00:00.000Z',
    roi: {
        times: 99.63105304314516,
        currency: 'btc',
        percentage: 9963.105304314517,
    },
    last_updated: '2022-04-17T09:45:46.643Z',
};

describe('CoinListItem Compoennt', () => {
    afterEach(() => {
        jest.resetAllMocks();
        jest.restoreAllMocks();
    });

    const mockFn = jest.fn();
    const mockedListItem = {
        item: itemData,
    } as ListRenderItemInfo<Coin>;

    test('item text is rendered', () => {
        const { getByText } = render(<CoinListItem data={mockedListItem} />);

        // check if all required information were rendered
        // title
        expect(getByText('Ethereum')).toBeTruthy();
        // subtitle
        expect(getByText('eth')).toBeTruthy();
        // current price
        expect(getByText('2818.48 €')).toBeTruthy();
        // high price
        expect(getByText('High: 2844.9 €')).toBeTruthy();
        // low price
        expect(getByText('Low: 2793.02 €')).toBeTruthy();
    });

    test('item is pressed', () => {
        const { getByTestId } = render(<CoinListItem data={mockedListItem} onPress={mockFn} />);

        fireEvent.press(getByTestId('Pressable'));
        expect(mockFn).toBeCalledTimes(1);
    });
});
