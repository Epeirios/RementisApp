import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import PropTypes from "prop-types";
import { ScreenTemplate } from "../components/ScreenTemplate";
import { Container } from "../components/Container";
import { Footer, Header } from "../components/Header&Footer";
import { TextBox } from "../components/TextBox";

const GLOBAL = require("../config/Globals");

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };
  render() {
    return (
      <ScreenTemplate
        headertitle={"rementis"}
        footercircles={[
          {
            icon: "md-menu",
            label: "feed",
            onPress: () => {
              this.props.navigation.navigate("Feed");
            }
          },
        ]}
      >
        <TextBox fontColor={GLOBAL.COLOR.WHITE}>
          hallo allemaal test test
        </TextBox>
        <TextBox fontColor={GLOBAL.COLOR.WHITE}>Heerlen</TextBox>
      </ScreenTemplate>
    );
  }
}

export default Home;
