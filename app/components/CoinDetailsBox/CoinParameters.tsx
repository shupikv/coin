import React, { useCallback } from 'react';
import { View, StyleSheet, Linking, Alert, Text } from 'react-native';
import Colors from '../../constants/Colors';
import StyledPressable from '../StyledPressable';

type OpenURLButtonProps = {
    url: string;
};

export const OpenURLButton: React.FC<OpenURLButtonProps> = ({ url }) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return (
        <StyledPressable onPress={handlePress} contentContainerStyle={styles.value}>
            <Text style={[styles.mainText, styles.linkText]}>{url}</Text>
        </StyledPressable>
    );
};

type CoinParametersProps = {
    data: {
        name: string;
        value: string | number | null | undefined;
        suffix?: string;
    };
};

const CoinParameters: React.FC<CoinParametersProps> = ({ data: { name, value, suffix } }) => {
    var isWebLink = /^((http|https):\/\/)/.test(value?.toString() as string);
    return (
        <View style={styles.container}>
            <Text style={[styles.mainText, styles.keyText]}>{name}</Text>
            {isWebLink ? (
                <OpenURLButton url={value?.toString() as string} />
            ) : (
                <Text style={[styles.mainText, styles.valueText, styles.value]}>
                    {typeof value === 'number' ? `${value.toLocaleString()} ${suffix}` : value}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    mainText: {
        fontSize: 16,
        lineHeight: 30,
    },
    keyText: {
        color: Colors.ligthText,
    },
    value: {
        marginLeft: 5,
    },
    valueText: {
        color: Colors.mainText,
    },
    linkText: {
        color: Colors.accent,
    },
});

export default CoinParameters;
