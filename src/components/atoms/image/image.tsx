import React from 'react';
import FastImage, { FastImageProps, Source } from 'react-native-fast-image';
import styled from 'styled-components/native';

interface IProps {
    source: Source | number,
    width?: number;
    height?: number;
}

const StyledImage: React.FC<FastImageProps & IProps> = styled(FastImage)`
    width: ${({ width }: IProps) => width}px;
    height: ${({ height }: IProps) => height}px; 
`;

const Image = ({ width = 30, height = 30, ...props }: IProps) => {
    return (
        <StyledImage
            width={width}
            height={height}
            {...props}
        />
    );
};

export default Image;