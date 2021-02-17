import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native'
import HomeModule from './modules/home/home.module';

const App = () => {
  return (
    <NavigationContainer>
      <HomeModule/>
    </NavigationContainer>
  );
};



export default App;
