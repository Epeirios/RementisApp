import { StackNavigator } from "react-navigation";

import Home from "../screen/Home";
import Feed from "../screen/Feed";

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    Feed: {
      screen: Feed,
      navigationOptions: {
        header: () => null
      }
    }
  },
  {
    mode: "modal"
  }
);
