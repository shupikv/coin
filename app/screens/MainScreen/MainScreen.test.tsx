import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/core';
import { Routes, NavigatorParams } from '../../navigation';
import MainScreen from './MainScreen';

jest.mock('../../components/CoinListItem', () => 'CoinListItem');
jest.mock('../../api/fetchCoins', () => () => {});

describe('Main Screen', () => {
    it('renders correctly', async () => {
        const navigate = jest.fn();
        const { getByTestId } = render(
            <MainScreen
                route={{} as RouteProp<NavigatorParams, Routes.MAIN>}
                navigation={
                    { navigate } as unknown as StackNavigationProp<
                        NavigatorParams,
                        Routes.MAIN,
                        undefined
                    >
                }
            />,
        );

        await waitFor(() => {
            expect(getByTestId('MainScreen')).toBeDefined();
            expect(getByTestId('CoinsList')).toBeDefined();
        });
    });
});
