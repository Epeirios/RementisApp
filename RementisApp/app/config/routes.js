import { TabNavigator } from "react-navigation";

import Home from "../screen/Home";
import Feed from "../screen/Feed";
import DemoApi from "../screen/DemoApi";
import Contacts from "../screen/Contacts";
import AddAgendaPoint from "../screen/AddAgendaPoint";
import ContactAgendaFeed from "../screen/ContactAgendaFeed";

export default TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        header: () => null
      }
    },
    ContactAgendaFeed: {
      screen: ContactAgendaFeed,
      navigationOptions: {
        header: () => null
      }
    },
    AddAgendaPoint: {
      screen: AddAgendaPoint,
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
  },
  {
    swipeEnabled: false,
  }
);
