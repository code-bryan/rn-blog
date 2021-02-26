import React from 'react';
import styled from 'styled-components/native';
import StoryAvatar, { StoryAvatarState } from '../../molecules/story-avatar/story-avatar';

const Container = styled.ScrollView`
    padding: 10px 10px 8px;
    border-bottom-width: .4px;
    border-bottom-color:#B3B3B3;
`;

const Stories = () => {

    return (
        <Container horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
            <StoryAvatar type={StoryAvatarState.user} />
            <StoryAvatar type={StoryAvatarState.reviewed} />
            {Array.from(Array(10)).map(() => <StoryAvatar type={StoryAvatarState.default} />)}
        </Container>
    );
};

export default Stories;