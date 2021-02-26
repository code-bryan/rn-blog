import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import Text from '../../../components/atoms/text/text';
import Header from '../../../components/organisms/header/header';
import Stories from '../../../components/organisms/stories/stories';
import Home from '../../../components/template/home/home';

const Body = styled.View`
  background-color: ${Colors.white};
  flex: 1;
`;

const HomeScreen: React.FunctionComponent<any> = () => {
  const onCameraPressHandler = () => {

  };

  const onDirectPressHandler = () => {

  };

  return (
    <Home 
      header={<Header onCameraPress={onCameraPressHandler} onDirectPress={onDirectPressHandler} />}
      stories={<Stories />}
      content={
        <Body>
          {Array.from(Array(30)).map(() => <Text size={25}>Hola</Text>)}
        </Body>
      }
    />
  );
};

export default HomeScreen;