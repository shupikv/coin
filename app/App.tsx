import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
    return (
        <NavigationContainer>
            <RootNavigator testID="AppRoot" />
        </NavigationContainer>
    );
};

export default App;
