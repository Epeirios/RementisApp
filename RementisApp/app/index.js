import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Navigator from "./config/routes";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $primaryWhite: "#FFFFFF",
  $outline: 0
});

const App = () => <Navigator />;

export default App;
