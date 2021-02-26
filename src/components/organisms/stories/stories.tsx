import React from 'react';
import styled from 'styled-components/native';
import StoryAvatar from '../../molecules/story-avatar/story-avatar';

const Container = styled.ScrollView`
    padding: 15px 10px;
`;

const Stories = () => {

    return (
        <Container horizontal showsHorizontalScrollIndicator={false}>
            {Array.from(Array(10)).map(() => <StoryAvatar />)}
        </Container>
    );
};

export default Stories;