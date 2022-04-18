import React, { PropsWithChildren } from 'react';
import { Platform, ViewProps } from 'react-native';
import {
    createStackNavigator,
    StackNavigationOptions,
    TransitionPresets,
} from '@react-navigation/stack';
import Routes from './Routes';
import MainScreen, { MainScreenOptions } from '../screens/MainScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const transitions =
    Platform.OS === 'ios'
        ? TransitionPresets.ModalPresentationIOS
        : TransitionPresets.ScaleFromCenterAndroid;

const loginScreensOptions: StackNavigationOptions = {
    headerShown: true,
    animationEnabled: true,
    cardStyle: {
        backgroundColor: Colors.background,
    },
    ...transitions,
};

interface RootNavigatorProps extends PropsWithChildren<ViewProps> {}

const RootNavigator: React.FC<RootNavigatorProps> = () => (
    <Stack.Navigator screenOptions={loginScreensOptions}>
        <Stack.Screen name={Routes.MAIN} component={MainScreen} options={MainScreenOptions} />
    </Stack.Navigator>
);

export default RootNavigator;
