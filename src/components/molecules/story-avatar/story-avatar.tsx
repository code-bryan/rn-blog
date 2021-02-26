import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Image from '../../atoms/image/image';
import Text from '../../atoms/text/text';

const Img = require('../../../assets/img/image-pic.png');

const IMAGE_SIZE = 65;

const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`;

const StyledImage = styled(Image)`
    border-radius: 50px;
    margin-bottom: 6px;
`;

interface IProps {
    onPress?: () => void;
}

const StoryAvatar: React.FC<IProps> = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Container>
                <StyledImage source={Img} height={IMAGE_SIZE} width={IMAGE_SIZE} />
                <Text size={14}>Your Story</Text>
            </Container>
        </TouchableWithoutFeedback>
    );
};

export default StoryAvatar;