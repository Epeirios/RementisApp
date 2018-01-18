import { TabNavigator } from "react-navigation";

import Home from "../screen/Home";
import Feed from "../screen/Feed";
import DemoApi from "../screen/DemoApi";

export default TabNavigator(
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
    },
    DemoApi: {
      screen: DemoApi,
      navigationOptions: {
        header: () => null
      }
    }
  },
  {
    swipeEnabled: false,
  }
);
