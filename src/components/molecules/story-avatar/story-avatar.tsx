import React from 'react';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Add from '../../atoms/icons/add/add';
import Image from '../../atoms/image/image';
import Text from '../../atoms/text/text';

const Img = require('../../../assets/img/image-pic.png');
const Background = require('../../../assets/img/oval.png');

const IMAGE_SIZE = 65;
const IMAGE_SIZE_BACKGROUND = 69;

const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-right: 12px;
`;

const Avatar = styled(Image)`
    border-radius: 50px;
    border-width: 3px;
    border-color: #fff;
`;

const ImageContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${IMAGE_SIZE_BACKGROUND}px;
    width: ${IMAGE_SIZE_BACKGROUND}px;
`;

const ReviewedContainer = styled.View`
    border-width: 1px;
    border-radius: 50px;
    background-color: #B3B3B3;
    border-color: #fff;
`;

const AddStoryContainer = styled.View`
    background-color: #1993DF;
    border-radius: 50px;
    height: ${30}px;
    width: ${30}px;
    border-width: 3px;
    border-color: #fff;
    z-index: 9999;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
`;


const AvatarWithActiveStory = () => (
    <Image source={Background} height={IMAGE_SIZE_BACKGROUND + 1} width={IMAGE_SIZE_BACKGROUND + 1}>
        <ImageContainer>
            <Avatar source={Img} height={IMAGE_SIZE} width={IMAGE_SIZE} />
        </ImageContainer>
    </Image>
);

const ReviewedAvatar = () => (
    <ReviewedContainer>
        <ImageContainer>
            <Avatar source={Img} height={IMAGE_SIZE} width={IMAGE_SIZE} />
        </ImageContainer>
    </ReviewedContainer>
);

const UserAvatar = () => (
    <ImageContainer>
        <Avatar source={Img} height={IMAGE_SIZE} width={IMAGE_SIZE} />
        <AddStoryContainer>
            <Add size={18} />
        </AddStoryContainer>
    </ImageContainer>
);

export enum StoryAvatarState {
    user,
    default,
    reviewed,
}

interface IProps {
    type?: StoryAvatarState,
    onPress?: () => void;
}

const StoryAvatar: React.FC<IProps> = ({ onPress, type = StoryAvatarState.reviewed }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Container>
                {type === StoryAvatarState.default ? <AvatarWithActiveStory /> : null}
                {type === StoryAvatarState.reviewed ? <ReviewedAvatar /> : null}
                {type === StoryAvatarState.user ? <UserAvatar /> : null}
                
            
                <View style={{ marginTop: 5 }}>
                    <Text size={12} color="#919191">Text</Text>
                </View>
            </Container>
        </TouchableWithoutFeedback>
    );
};

export default StoryAvatar;