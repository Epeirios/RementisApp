import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, TouchableHighlight, Text } from "react-native";

import styles from "./styles";

import { TextBox } from "../TextBox";

const FONTSIZE = 9;

class Circle extends Component {
  render() {
    const {image, color, labelAbove, label, isButton, onPress} = this.props;

    let imagecontainer;
    let buttoncontainer;
    let labelcontainer;

    if (image) {
      imagecontainer = <Image source={image} style={styles.image} />;
    } else {
      imagecontainer = <View />;
    }

    if (labelAbove) {
      labelcontainer = (
        <View style={styles.labelcontainer}>
          <TextBox fontSize={FONTSIZE} fontColor={color} style={styles.label}>
            {label}
          </TextBox>
          <View style={styles.outercircle}>
            <View style={styles.centercircle}>
              <View style={styles.innercircle}>{imagecontainer}</View>
            </View>
          </View>
        </View>
      );
    } else {
      labelcontainer = (
        <View style={styles.labelcontainer}>
          <View style={styles.outercircle}>
            <View style={styles.centercircle}>
              <View style={styles.innercircle}>{imagecontainer}</View>
            </View>
          </View>
          <TextBox fontSize={FONTSIZE} fontColor={color}>
            {label}
          </TextBox>
        </View>
      );
    }

    if (isButton) {
      buttoncontainer = (
        <TouchableHighlight onPress={onPress}>
          {labelcontainer}
        </TouchableHighlight>
      );
    } else {
      buttoncontainer = labelcontainer;
    }

    return <View style={styles.container}>{buttoncontainer}</View>;
  }
}

/**
 * @todo
 * right/left circle array
 * render right/left circle array
 * shadows
 */
Circle.PropTypes = {
  image: PropTypes.any,
  isButton: PropTypes.bool,
  onPress: PropTypes.func,
  label: PropTypes.string,
  labelAbove: PropTypes.bool,
  color: PropTypes.any
};

Circle.defaultProps = {
  isButton: false,
  labelAbove: false,
  label: "label",
  color: '#F00',
};

export default Circle;
