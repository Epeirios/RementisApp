import React from "react";
import { View, ScrollView, Text } from "react-native";

import { ScreenTemplate } from "../components/ScreenTemplate";

import { Container } from "../components/Container";
import { Footer, Header } from "../components/Header&Footer";
import { TextBox } from "../components/TextBox";

const GLOBAL = require("../config/Globals");

export default () => (
  <ScreenTemplate>
    <TextBox fontColor={GLOBAL.COLOR.WHITE}>hallo allemaal test test</TextBox>
    <TextBox fontColor={GLOBAL.COLOR.WHITE}>Heerlen</TextBox>
  </ScreenTemplate>
);
