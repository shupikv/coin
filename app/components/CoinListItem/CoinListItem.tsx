import React from 'react';
import { View, StyleSheet, Image, ListRenderItemInfo, Text } from 'react-native';
import { Coin } from '../../models';
import Colors from '../../constants/Colors';
import StyledPressable from '../StyledPressable';

type StoreItemProps = {
    data: ListRenderItemInfo<Coin>;
    onPress?: () => void;
};

const CoinListItem: React.FC<StoreItemProps> = ({ data, onPress }) => {
    const { name, image, symbol, current_price, high_24h, low_24h } = data?.item;

    return (
        <View testID="StoreItem">
            <StyledPressable onPress={onPress} contentContainerStyle={styles.containerInner}>
                <View>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
                <View style={styles.infoBox}>
                    <View style={styles.mainLine}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>{symbol}</Text>
                            <Text style={[styles.mainText, styles.subTitle]}>{name}</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.titleText}>
                                {`${current_price.toLocaleString()} €`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.subLine}>
                        <Text style={styles.mainText}>
                            High: {`${high_24h.toLocaleString()} €`}
                        </Text>
                        <Text style={[styles.mainText, styles.paddingLeft]}>
                            Low: {`${low_24h.toLocaleString()} €`}
                        </Text>
                    </View>
                </View>
            </StyledPressable>
        </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 17,
        lineHeight: 20,
        color: Colors.titleText,
    },
    mainText: {
        fontSize: 13,
        lineHeight: 15,
        color: Colors.mainText,
    },
    containerInner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 100,
        maxHeight: 100,
        shadowColor: 'black',
        margin: 5,
        padding: 10,
        borderRadius: 4,
        backgroundColor: Colors.cardBackground,
    },
    infoBox: {
        flex: 1,
        marginLeft: 10,
    },
    image: {
        height: 60,
        width: 60,
        resizeMode: 'cover',
        borderRadius: 50,
        backgroundColor: Colors.imagePlaceholder,
    },
    mainLine: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    subLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        columnGap: 20,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    subTitle: {
        color: Colors.ligthText,
    },
    priceContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    paddingLeft: {
        paddingLeft: 10,
    },
});

export default CoinListItem;
