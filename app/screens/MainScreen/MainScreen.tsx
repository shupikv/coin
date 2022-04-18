import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Coins } from '../../models';
import { Routes, NavigatorParams } from '../../navigation';
import fetchCoins from '../../api/fetchCoins';
import CoinListItem from '../../components/CoinListItem';
import FullScreenLoading from '../../components/FullScreenLoading';

type MainScreenProps = StackScreenProps<NavigatorParams, Routes.MAIN>;

let stopFetchMore = true;

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
    const [coinItems, setCoinItems] = useState<Coins>([]);
    const [isFetching, setIsFetching] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const getCoins = useCallback(async (page?: number) => {
        try {
            setIsFetching(true);
            const data = await fetchCoins(page);
            setCoinItems((currentData) => [...currentData, ...data]);
            setIsFetching(false);
        } catch (error) {
            console.log(error);
            Alert.alert('No Internet connection', 'Something went wrong...', [
                { text: 'OK', onPress: () => {} },
            ]);
        }
    }, []);

    const handleOnEndReached = () => {
        // prevent loading next page on the first render
        if (stopFetchMore) {
            return;
        }
        setCurrentPage((previousPage) => (previousPage += 1));
    };

    useEffect(() => {
        console.log('getCoins', currentPage);
        getCoins(currentPage);
    }, [getCoins, currentPage]);

    if (isFetching && coinItems.length === 0) {
        return <FullScreenLoading />;
    }

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
                onEndReached={handleOnEndReached}
                onEndReachedThreshold={0.5}
                onScrollBeginDrag={() => {
                    stopFetchMore = false;
                }}
                ListFooterComponent={() => <ActivityIndicator style={styles.loading} />}
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
    loading: {
        marginVertical: 10,
    },
});

export type MainRouteParams = undefined;

export const MainScreenOptions = {
    title: 'Coins',
};

export default MainScreen;
