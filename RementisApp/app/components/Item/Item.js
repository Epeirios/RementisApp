import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import styles from "./styles";
import { Circle } from "../Circle";
import Icon from "react-native-vector-icons/Ionicons";
import { TextBox } from "../TextBox";

const GLOBAL = require("../../config/Globals");

class Item extends Component {
  render() {
    const { title, time, status } = this.props;

    const statusContainer = <View />;

    return (
      <View style={styles.container}>
        <View>
          <TextBox>{title}</TextBox>
          <TextBox>{time}</TextBox>
          <TextBox>placeholder text</TextBox>
        </View>
        <View>{statusContainer}</View>
      </View>
    );
  }
}

export default Item;
