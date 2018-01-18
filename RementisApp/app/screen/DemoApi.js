import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  FlatList,
  ActivityIndicator,
  Image
} from "react-native";
import PropTypes from "prop-types";
import { ScreenTemplate } from "../components/ScreenTemplate";
import { Container } from "../components/Container";
import { Footer, Header } from "../components/Header&Footer";
import { TextBox } from "../components/TextBox";

var TimerMixin = require("react-timer-mixin");

const GLOBAL = require("../config/Globals");

class DemoApi extends Component {
  static navigationOptions = {
    tabBarVisible: false
  };

  static propTypes = {
    navigation: PropTypes.object
  };

  state = {
    data: []
  };

  componentDidMount() {
    this.interval = setInterval(this.fetchData, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch(
      "https://rementisapi.azurewebsites.net/sensordata"
    );
    const json = await response.json();

    json.forEach(element => {
      if (element.State) {
        element.State = "Deur open";
      } else {
        element.State = "Deur gesloten";
      }
    });

    this.setState({ data: json });
  };

  render() {
    let body;

    if (this.state.data.length == 0) {
      body = <ActivityIndicator size="large" color="#fff" />;
    } else {
      const lastItem = this.state.data[this.state.data.length - 1];

      let image;
      if (lastItem.State == "Deur open") {
        image = require("../resources/images/open-door-with-border.png");
      } else {
        image = require("../resources/images/closed-door-with-border-silhouette.png");
      }

      body = (
        <View>
          <Text>{`
  ${lastItem.Id} 
  ${lastItem.Name} 
  ${lastItem.State} 
  ${lastItem.Timestamp}
      `}</Text>
          <Image source={image} />
        </View>
      );
    }

    return (
      <ScreenTemplate
        headertitle={"DemoApi"}
        headercircles={[
          {
            icon: "md-arrow-round-back",
            label: "terug",
            onPress: () => {
              this.props.navigation.goBack(null);
            }
          }
        ]}
      >
        <View>{body}</View>
      </ScreenTemplate>
    );
  }
}

export default DemoApi;
