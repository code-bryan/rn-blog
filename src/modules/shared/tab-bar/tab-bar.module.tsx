import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeModule, { HomeScreens } from "../../home/home.module";
import TabBar from '../../../components/organisms/tab-bar/tab-bar';

const Tab = createBottomTabNavigator();

const TabBarModule = () => (
  <Tab.Navigator tabBar={TabBar}>
    <Tab.Screen name={HomeScreens.Feed} component={HomeModule} />
  </Tab.Navigator>
);

export default TabBarModule;