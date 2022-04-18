import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Alert } from 'react-native';
import { Coins } from '../../models';
import fetchCoins from '../../api/fetchCoins';
import CoinListItem from '../../components/CoinListItem';

const MainScreen: React.FC = () => {
    const [coinItems, setCoinItems] = useState<Coins>([]);

    const getCoins = useCallback(async () => {
        try {
            const data = await fetchCoins();
            setCoinItems(data);
        } catch (error) {
            console.log(error);
            Alert.alert('No Internet connection', 'Something went wrong...', [
                { text: 'OK', onPress: () => {} },
            ]);
        }
    }, []);

    useEffect(() => {
        getCoins();
    }, [getCoins]);

    return (
        <SafeAreaView style={styles.coinItemsContainer} testID="MainScreen">
            <FlatList
                testID="CoinsList"
                data={coinItems}
                renderItem={(item) => <CoinListItem data={item} />}
                contentContainerStyle={styles.coinItemsList}
                keyExtractor={(item) => item.id}
                numColumns={1}
                horizontal={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    coinItemsContainer: {
        flex: 1,
        zIndex: 1,
    },
    coinItemsList: {
        margin: 5,
    },
});

export type MainRouteParams = undefined;

export const MainScreenOptions = {
    title: 'Coins',
};

export default MainScreen;
