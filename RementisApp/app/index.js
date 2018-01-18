import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider } from 'react-redux';

import Navigator from "./config/routes";
import './reducers';
import store from './config/store';

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $primaryWhite: "#FFFFFF",
  $outline: 0
});

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
