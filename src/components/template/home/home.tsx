import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.ScrollView`
  background-color: #fff;
`;

interface IProps {
    header: React.ReactNode;
    stories: React.ReactNode;
    content: React.ReactNode;
}

const Home = ({ header, content, stories }: IProps) => (
    <>
        <StatusBar barStyle="dark-content" />
        {header}
        <SafeAreaView>
            <Container contentInsetAdjustmentBehavior="automatic">
                {stories}
                {content}
            </Container>
        </SafeAreaView>
    </>
);

export default Home;