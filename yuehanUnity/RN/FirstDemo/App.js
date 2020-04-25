/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import TextCommont from './Commons/TextCommont';
import LKImage from './Commons/LKImage';
import ImgSRC from './Commons/ImgSRC';
import LKTextInput from './Commons/LKTextInput';
import LKButton from './Commons/LKButton';
import LKDemo from './Commons/Demo/LKDemo';
import LKScroller from './Commons/LKScroller';
import SwiperDemo from './Commons/Demo/SwiperDemo'
import LKRefresh from './Commons/Demo/LKRefresh'
import LKFlatListView from './Commons/Demo/LKFlatListView'
import LineWineDemo from './Commons/Demo/LineWineDemo'
import FetchDemo from './Commons/Demo/FetchDemo'
import LKSectionList from './Commons/Demo/LKSectionList'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainView}>
        <LKSectionList></LKSectionList>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'cyan',
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center"
  }
});

export default App;
