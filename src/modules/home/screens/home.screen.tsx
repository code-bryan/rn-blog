import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import Text from '../../../components/atoms/text/text';
import Header from '../../../components/organisms/header/header';

const Container = styled.ScrollView`
  background-color: ${Colors.white};
`;

const Body = styled.View`
  background-color: ${Colors.white};
  flex: 1;
`;


const HomeScreen: React.FunctionComponent<any> = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header />
      <SafeAreaView>
        <Container contentInsetAdjustmentBehavior="automatic">
          <Body>
            {Array.from(Array(100)).map(() => <Text size={25}>Hola</Text>)}
          </Body>
        </Container>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;