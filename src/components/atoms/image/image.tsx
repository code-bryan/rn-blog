import React from 'react';
import FastImage, { FastImageProps, Source } from 'react-native-fast-image';
import styled from 'styled-components/native';

interface IProps {
    source: Source | number,
}

const StyledImage: React.FC<FastImageProps & IProps> = styled(FastImage)``;

const Image = ({ ...props }: IProps) => {
    return (
        <StyledImage
            {...props}
        />
    );
};

export default Image;