import React from "react";
import { View, ScrollView, Text } from "react-native";

import { ScreenTemplate } from "../components/ScreenTemplate";

import { Container } from "../components/Container";
import { Footer, Header } from "../components/Header&Footer";
import { TextBox } from "../components/TextBox";

const GLOBAL = require("../config/Globals");

export default () => (
  <ScreenTemplate
  headertitle={'rementis'}
  headercircles={[
    {
      image: require("../resources/images/settings-512.png"),
      label: "back"
    },
  ]}
  footercircles={[
    {
      image: require("../resources/images/settings-512.png"),
      label: "menu"
    },
    {
      image: require("../resources/images/settings-512.png"),
      label: "persoonlijk"
    }
  ]}  
  
  >
    <TextBox fontColor={GLOBAL.COLOR.WHITE}>hallo allemaal test test</TextBox>
    <TextBox fontColor={GLOBAL.COLOR.WHITE}>Heerlen</TextBox>
  </ScreenTemplate>
);
