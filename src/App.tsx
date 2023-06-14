import React from 'react';
import {  Platform,  UIManager} from 'react-native';
import HomeScreen from './screens/home/HomeScreen';
const App = () => {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  return(
    <HomeScreen />
  )
};

export default App;
