import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import Text, { TextWeight } from '../../../components/atoms/text/text';

declare const global: {HermesInternal: null | {}};

const HomeScreen: React.FunctionComponent<any> = () => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <View style={styles.body}>
              <Text>Hola</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    body: {
      backgroundColor: Colors.white,
    },
});

export default HomeScreen;