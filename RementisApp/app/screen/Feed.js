import React from "react";
import { View, ScrollView, Text } from "react-native";

import { ScreenTemplate } from "../components/ScreenTemplate";

import { Container } from "../components/Container";
import { Footer, Header } from "../components/Header&Footer";
import { TextBox } from "../components/TextBox";
import { List } from "../components/List/index";

const GLOBAL = require("../config/Globals");

const temp = [
  { text: "item 1", checked: true },
  { text: "item 2", checked: true },
  { text: "item 3", checked: false },
  { text: "item 4", checked: false }
];

export default () => (
  <ScreenTemplate
    headertitle={"Activiteiten"}
    headercircles={[
      {
        icon: "md-arrow-round-back",
        label: "back"
      }
    ]}
  >
    <List list={temp} />
  </ScreenTemplate>
);
