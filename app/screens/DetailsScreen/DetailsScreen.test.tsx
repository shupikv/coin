import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/core';
import { Routes, NavigatorParams } from '../../navigation';
import DetailsScreen from './DetailsScreen';

jest.mock('../../components/CoinDetailsBox', () => 'CoinDetailsBox');
jest.mock('../../api/fetchCoinData', () => () => {});

describe('Details Screen', () => {
    it('renders correctly', async () => {
        const navigate = jest.fn();
        const { getByTestId } = render(
            <DetailsScreen
                route={{} as RouteProp<NavigatorParams, Routes.DETAILS>}
                navigation={
                    { navigate, setOptions: navigate } as unknown as StackNavigationProp<
                        NavigatorParams,
                        Routes.DETAILS,
                        undefined
                    >
                }
            />,
        );

        await waitFor(() => {
            expect(getByTestId('DetailsScreen')).toBeDefined();
            expect(getByTestId('CoinDetailsBox')).toBeDefined();
        });
    });
});
