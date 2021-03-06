import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const FullScreenLoading: React.FC = () => (
    <View style={styles.loading}>
        <ActivityIndicator size="large" />
    </View>
);

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default FullScreenLoading;
