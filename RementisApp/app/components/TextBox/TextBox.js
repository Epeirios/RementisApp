import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import EStyleSheet from "react-native-extended-stylesheet";

import styles from "./styles";

class TextBox extends Component {
  render() {
    const { children, fontSize, fontColor, numberOfLines } = this.props;

    return (
      <View style={styles.container}>
        <Text 
        style={[styles.text, { color: fontColor, fontSize: fontSize }]}
        numberOfLines={this.props.numberOfLines}
        >
          {children.toUpperCase()}
        </Text>
      </View>
    );
  }
}

TextBox.PropTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.number,
  fontColor: PropTypes.any,
  numberOfLines: PropTypes.number
};

TextBox.defaultProps = {
  children: "insert text",
  fontSize: 14,
  numberOfLines: 1
};

export default TextBox;
