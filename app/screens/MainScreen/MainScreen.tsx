import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Coins } from '../../models';
import { Routes, NavigatorParams } from '../../navigation';
import fetchCoins from '../../api/fetchCoins';
import CoinListItem from '../../components/CoinListItem';

type MainScreenProps = StackScreenProps<NavigatorParams, Routes.MAIN>;

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
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
                renderItem={(data) => (
                    <CoinListItem
                        data={data}
                        onPress={() =>
                            navigation.navigate(Routes.DETAILS, {
                                itemId: data.item.id,
                                title: data.item.symbol,
                            })
                        }
                    />
                )}
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
