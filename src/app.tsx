import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import TabBarModule from './modules/shared/tab-bar/tab-bar.module';


const Root = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Root.Navigator headerMode="none">
        <Root.Screen name="App" component={TabBarModule} />
      </ Root.Navigator >
    </NavigationContainer>
  );
};



export default App;
