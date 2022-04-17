import React from 'react';
import { View } from 'react-native';
import MainScreen from './screens/MainScreen';

const App = () => {
    return (
        <View style={{ flex: 1 }} testID="AppRoot">
            <MainScreen />
        </View>
    );
};

export default App;
