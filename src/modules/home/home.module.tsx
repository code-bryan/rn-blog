import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FeedScreen from './screens/feed.screen';

export enum HomeScreens {
    Feed = 'Feed'
}

const Stack = createStackNavigator();

const HomeModule = () => (
    <Stack.Navigator initialRouteName={HomeScreens.Feed} headerMode="none">
        <Stack.Screen component={FeedScreen} name={HomeScreens.Feed} />
    </Stack.Navigator>
);

export default HomeModule;