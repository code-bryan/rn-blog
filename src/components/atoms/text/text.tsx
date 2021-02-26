import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

export enum TextWeight {
    regular = 'regular',
    light = 'light',
    bold = 'bold',
    medium = 'medium',
}

interface IProps extends TextProps {
    textWeight?: TextWeight;
    size?: number;
    color?: string;
}

const fontFamily = (textWeight: string = TextWeight.regular) => {
    const textSplitted = textWeight.split('').map((char: string, index: number) => (index === 0) ? char.toUpperCase() : char).join('');
    return `SFProText-${textSplitted}`
}

const CustomText: React.FC<IProps> = styled.Text`
    font-family: ${({ textWeight }: IProps) => fontFamily(textWeight)};
    font-size: ${({ size }: IProps) => size}px;
    color: ${({ color }: IProps) => color};
`;

const Text: React.FC<IProps> = ({ children, size = 12, color = '#000', textWeight = TextWeight.regular, ...props }) => (
    <CustomText size={size} color={color} textWeight={textWeight} {...props}>
        {children}
    </CustomText>
);


export default Text;