import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './screens/home.screen';

export enum HomeScreens {
    Home = 'Home'
}

const Stack = createStackNavigator();

const HomeModule = () => (
    <Stack.Navigator initialRouteName={HomeScreens.Home}>
        <Stack.Screen component={HomeScreen} name={HomeScreens.Home} />
    </Stack.Navigator>
);

export default HomeModule;