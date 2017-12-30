import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { ScreenTemplate } from "../components/ScreenTemplate";
import PropTypes from "prop-types";
import { Container } from "../components/Container";
import { Footer, Header } from "../components/Header&Footer";
import { TextBox } from "../components/TextBox";
import { List } from "../components/List/index";
import { Profile } from "../components/Profile";

const GLOBAL = require("../config/Globals");

const temp = [
  { text: "item 1", checked: true },
  { text: "item 2", checked: true },
  { text: "item 3", checked: false },
  { text: "item 4", checked: false }
];

const temp2 = [
  {
    name: "herbert kartoffelsalat",
    profilepic: require("../resources/images/opa1.jpg"),
    items: [
      {
        title: "Medicatie Innemen",
        time: "11:00",
        status: "wrong"
      },
      {
        title: "Doktors afspraak",
        time: "10:00",
        status: "good"
      },
      {
        title: "Truus Bellen",
        time: "15:00",
        status: "pending"
      }
    ]
  },
  {
    name: "Hermelien Jaspers",
    profilepic: require("../resources/images/oma1.jpg"),
    items: [
      {
        title: "Medicatie Innemen",
        time: "11:00",
        status: "pending"
      },
    ]
  }
];

class Feed extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };
  render() {
    return (
      <ScreenTemplate
        headertitle={"Activiteiten"}
        headercircles={[
          {
            icon: "md-arrow-round-back",
            label: "back",
            onPress: () => {
              this.props.navigation.goBack(null);
            }
          }
        ]}
      >
        <Profile list={temp2} />

        <List list={temp} />
      </ScreenTemplate>
    );
  }
}

export default Feed;
