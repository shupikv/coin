import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import MainScreen from './MainScreen';

jest.mock('../../components/CoinListItem', () => 'CoinListItem');
jest.mock('../../api/fetchCoins', () => () => {});

describe('Main Screen', () => {
    it('renders correctly', async () => {
        const { getByTestId } = render(<MainScreen />);

        await waitFor(() => {
            expect(getByTestId('MainScreen')).toBeDefined();
            expect(getByTestId('CoinsList')).toBeDefined();
        });
    });
});
