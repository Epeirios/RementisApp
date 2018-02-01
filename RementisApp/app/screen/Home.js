import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import PropTypes from "prop-types";
import { ScreenTemplate } from "../components/ScreenTemplate";
import { Container } from "../components/Container";
import { Footer, Header } from "../components/Header&Footer";
import { TextBox } from "../components/TextBox";

const GLOBAL = require("../config/Globals");

class Home extends Component {
  static navigationOptions = {
    tabBarVisible: false
  };

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
              this.props.navigation.navigate("Contacts");
            }
          }
        ]}
      >
        <TextBox fontColor={GLOBAL.COLOR.WHITE}>Gemaakt door:</TextBox>
        <TextBox fontColor={GLOBAL.COLOR.WHITE}>Kevin Heugen</TextBox>
        <TextBox fontColor={GLOBAL.COLOR.WHITE}>Emiel Janssen</TextBox>
        <TextBox fontColor={GLOBAL.COLOR.WHITE}>Darryl Lemmens</TextBox>
        <TextBox fontColor={GLOBAL.COLOR.WHITE}>Christian Clermont</TextBox>
        <TextBox fontColor={GLOBAL.COLOR.WHITE}> </TextBox>
        <TextBox fontColor={GLOBAL.COLOR.WHITE}> </TextBox>
        <TextBox fontColor={GLOBAL.COLOR.WHITE}>In opdracht van:</TextBox>
        <TextBox fontColor={GLOBAL.COLOR.WHITE}>Rementis</TextBox>
        <TextBox fontColor={GLOBAL.COLOR.WHITE}>Zuyd Hogeschool</TextBox>
      </ScreenTemplate>
    );
  }
}

export default Home;
