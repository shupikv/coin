import React from 'react';
import { Pressable, PressableProps, StyleProp, Platform } from 'react-native';
import Colors from '../../constants/Colors';

export type StyledPressableProps = PressableProps & {
    contentContainerStyle?: StyleProp<any>;
};

const StyledPressable: React.FC<StyledPressableProps> = ({
    contentContainerStyle,
    onPress,
    disabled,
    children,
}) => (
    <Pressable
        testID="Pressable"
        onPress={onPress}
        disabled={disabled}
        android_ripple={{
            color: Colors.ripple,
            borderless: false,
            foreground: true,
        }}
        style={({ pressed }) => [
            contentContainerStyle,
            {
                opacity: Platform.OS === 'ios' && pressed ? 0.5 : 1,
            },
        ]}>
        {children}
    </Pressable>
);

export default StyledPressable;
