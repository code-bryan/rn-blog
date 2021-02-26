import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { HomeScreens } from '../../../modules/home/home.module';
import TabBarOptions from '../../../modules/shared/tab-bar/option.interface';
import Text from '../../atoms/text/text';

const Container = styled.View`
    background-color: #fff;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
`;

const Options: TabBarOptions[] = [
    {
        title: "Feed",
        tab: HomeScreens.Feed,
        icon: null
    },
    {
        title: "Search",
        tab: HomeScreens.Feed,
        icon: null
    },
    {
        title: "Reel",
        tab: HomeScreens.Feed,
        icon: null
    },
    {
        title: "Shop",
        tab: HomeScreens.Feed,
        icon: null
    },
    {
        title: "Profile",
        tab: HomeScreens.Feed,
        icon: null
    }
];

const TabBar = () => {
    return (
        <SafeAreaView>
            <Container>
                {Options.map(({ title }) => <Text size={20} color="#000">{title}</Text>)}
            </Container>
        </SafeAreaView>
    );
};

export default TabBar;