import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

export enum TextWeight {
    regular = 'regular',
    light = 'light',
    bold = 'bold',
}

interface IProps extends TextProps {
    textWeight?: TextWeight;
    size?: number;
}

const fontFamily = (textWeight: string = TextWeight.regular) => {
    const textSplitted = textWeight.split('').map((char: string, index: number) => (index === 0) ? char.toUpperCase() : char).join('');
    return `SFProText-${textSplitted}`
}

const CustomText: React.FC<IProps> = styled.Text`
    font-family: ${({ textWeight }: IProps) => fontFamily(textWeight)};
`;

const Text: React.FC<IProps> = ({ children, size = 12, textWeight = TextWeight.regular, ...props }) => (
    <CustomText size={size} {...props}>
        {children}
    </CustomText>
);


export default Text;