import React, { useEffect, useState, useCallback, useLayoutEffect } from 'react';
import { StyleSheet, Alert, SafeAreaView, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Routes, NavigatorParams } from '../../navigation';
import { CoinDetails } from '../../models';
import { fetchCoinData } from '../../api';
import CoinDetailsBox from '../../components/CoinDetailsBox';
import FullScreenLoading from '../../components/FullScreenLoading';

type DetailsScreenProps = StackScreenProps<NavigatorParams, Routes.DETAILS>;

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route, navigation }) => {
    const [coinData, setCoinData] = useState<CoinDetails>({} as CoinDetails);
    const [isFetching, setIsFetching] = useState(true);

    const getCoinData = useCallback(async () => {
        try {
            setIsFetching(true);
            const data = await fetchCoinData(route?.params?.itemId);
            setCoinData(data);
            setIsFetching(false);
        } catch (error) {
            console.log(error);
            Alert.alert('No Internet connection', 'Something went wrong...', [
                { text: 'OK', onPress: () => {} },
            ]);
        }
    }, [route?.params?.itemId]);

    useEffect(() => {
        getCoinData();
    }, [getCoinData]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route?.params?.title,
        });
    }, [navigation, route?.params?.title]);

    if (isFetching) {
        return <FullScreenLoading />;
    }

    return (
        <SafeAreaView style={styles.coinItemsContainer} testID="DetailsScreen">
            <ScrollView style={styles.container}>
                <CoinDetailsBox data={coinData} testID="CoinDetailsBox" />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    coinItemsContainer: {
        flex: 1,
        zIndex: 1,
    },
    container: {
        flex: 1,
    },
});

export type DetailsRouteParams = {
    itemId: string;
    title: string;
};

export const DetailsScreenOptions = {};

export default DetailsScreen;
