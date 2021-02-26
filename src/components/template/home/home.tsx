import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Text from '../../atoms/text/text';

const List = styled.FlatList`
  background-color: #fff;
`;

interface IProps {
    header: React.ReactNode;
    stories: React.ReactNode;
    data: any[];
}

const Home = ({ header, data = [], stories }: IProps) => (
    <>
        <StatusBar barStyle="dark-content" />
        {header}
        <SafeAreaView>
            <List 
                data={data}
                ListHeaderComponent={() => (<>{stories}</>)}
                renderItem={() => <Text size={25}>Hola</Text>}
            />
        </SafeAreaView>
    </>
);

export default Home;