import React from 'react';
import styled from 'styled-components/native';
import StoryAvatar, { StoryAvatarState } from '../../molecules/story-avatar/story-avatar';

const Container = styled.FlatList`
    padding: 10px 10px 8px;
    border-bottom-width: .4px;
    border-bottom-color:#B3B3B3;
`;

const DefaultContainer = styled.View`
    flex-direction: row;
`;


const Stories = () => {

    return (
        <Container 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }} 
            data={[{title: 'no'}, {title: 'no'}, {title: 'no'}, {title: 'no'}]}
            ListHeaderComponent={() => (
                <DefaultContainer>
                    <StoryAvatar key="user" type={StoryAvatarState.user} />
                    <StoryAvatar key="reviewed" type={StoryAvatarState.reviewed} />
                </DefaultContainer>
            )}
            renderItem={({ index }) => <StoryAvatar key={index} type={StoryAvatarState.default} />}
        />
    );
};

export default Stories;