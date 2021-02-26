import React, { ComponentType } from 'react';
import { TouchableNativeFeedbackProps, Platform, TouchableNativeFeedback, TouchableOpacity, TouchableOpacityProps } from 'react-native';

export type ButtonProps = TouchableOpacityProps | TouchableNativeFeedbackProps;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    const TouchableComponent: ComponentType<ButtonProps> = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

    return (
        <TouchableComponent activeOpacity={0.5} {...props}>
            {children}
        </TouchableComponent>
    );
};

export default Button;