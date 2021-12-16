/**
 * @format
 */

import React from "react";
import {AppRegistry} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import App from './App';
import {name as appName} from './app.json';

const Index = () => {
  return (
    <>
      <App/>
      <FlashMessage
        position={Platform.OS === "ios" ? 'top' : {top: 50, left: 0, right: 0 }}
      />
    </>
  )
}

AppRegistry.registerComponent(appName, () => Index);
