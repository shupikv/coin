/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, useWindowDimensions, StyleSheet, Platform, ViewProps } from 'react-native';
import RenderHtml from 'react-native-render-html';
import Colors from '../../constants/Colors';
import { CoinDetails } from '../../models';
import CoinParameters from './CoinParameters';

type CoinDetailsBoxProps = ViewProps & {
    data: CoinDetails;
};

const CoinDetailsBox: React.FC<CoinDetailsBoxProps> = ({ data }) => {
    const { name, symbol, hashing_algorithm, description, market_data, links, genesis_date } = data;
    const { width } = useWindowDimensions();
    const [url] = links?.homepage;

    const params = [
        { name: 'Symbol', value: symbol },
        { name: 'Name', value: name },
        { name: 'Hashing algorithm', value: hashing_algorithm },
        { name: 'Market cap', value: market_data?.market_cap?.eur, suffix: '€' },
        { name: 'Genesis date', value: genesis_date },
        { name: 'Homepage', value: url },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {params.map((item) => (
                    <CoinParameters key={item.name} data={item} />
                ))}
            </View>
            <View style={styles.descriptionContainer}>
                <RenderHtml
                    contentWidth={width}
                    source={{ html: description?.en?.replace(/\n/g, '<br/>') }}
                    baseStyle={{
                        color: Colors.mainText,
                        fontSize: 16,
                        lineHeight: 20,
                        textAlign: 'justify',
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: Platform.OS === 'ios' ? 10 : 20,
    },
    header: {
        backgroundColor: Colors.cardBackground,
        borderRadius: 6,
        padding: 10,
    },
    descriptionContainer: {
        marginTop: 25,
    },
});

export default CoinDetailsBox;
