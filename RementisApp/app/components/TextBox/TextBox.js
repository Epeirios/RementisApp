import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import EStyleSheet from "react-native-extended-stylesheet";

import styles from "./styles";

class TextBox extends Component {
  render() {
    const { children, fontSize, fontColor } = this.props;

    return (
      <View>
        <Text style={[styles.text, { color: fontColor, fontSize: fontSize }]}>
          {children.toUpperCase()}
        </Text>
      </View>
    );
  }
}

TextBox.PropTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.number,
  fontColor: PropTypes.any
};

TextBox.defaultProps = {
  children: "insert text",
  fontSize: 14
};

export default TextBox;
