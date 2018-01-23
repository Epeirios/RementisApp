import { TabNavigator } from "react-navigation";

import Home from "../screen/Home";
import Feed from "../screen/Feed";
import DemoApi from "../screen/DemoApi";
import Contacts from "../screen/Contacts";

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
    },
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        header: () => null
      }
    }
  },
  {
    swipeEnabled: false,
  }
);
