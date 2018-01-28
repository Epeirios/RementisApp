import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

import { TextBox } from "../TextBox";

const FONTSIZE = 12;

class Circle extends Component {
  render() {
    const { color, labelAbove, label, onPress, icon } = this.props;

    let imagecontainer;
    let circlecontainer;
    let buttoncontainer;
    let labelcontainer;
    let container;

    /** imagecontainer */
    if (icon) {
      imagecontainer = <Icon size={24} name={icon} color={color} />;
    } else {
      imagecontainer = null;
    }

    /** circlecontainer */
    circlecontainer = (
      <View style={styles.outercircle}>
        <View style={[styles.centercircle, {backgroundColor: color} ]}>
          <View style={styles.innercircle}>{imagecontainer}</View>
        </View>
      </View>
    );

    /** buttoncontainer */
    if (typeof onPress === "function") {
      buttoncontainer = (
        <TouchableHighlight
          onPress={onPress}
          style={styles.button}
          underlayColor="transparent"
        >
          {circlecontainer}
        </TouchableHighlight>
      );
    } else {
      buttoncontainer = circlecontainer;
    }

    /** labelcontainer */
    labelcontainer = (
      <View style={styles.labelcontainer}>
        <TextBox fontSize={FONTSIZE} fontColor={color}>
          {label}
        </TextBox>
      </View>
    );

    /** container */
    if (typeof label !== "undefined") {
      if (labelAbove) {
        container = (
          <View style={styles.haslabelContainer}>
            {labelcontainer}
            {buttoncontainer}
          </View>
        );
      } else {
        container = (
          <View style={styles.haslabelContainer}>
            {buttoncontainer}
            {labelcontainer}
          </View>
        );
      }
    } else {
      container = (
        <View style={styles.nolabelContainer}> 
          {buttoncontainer}
        </View>
      );
    }

    return <View style={styles.container}>{container}</View>;
  }
}

/**
 * @todo
 * right/left circle array
 * render right/left circle array
 * shadows
 */
Circle.PropTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func,
  label: PropTypes.string,
  labelAbove: PropTypes.bool,
  color: PropTypes.any
};

Circle.defaultProps = {
  icon: "md-home",
  labelAbove: false,
  color: "#F00"
};

export default Circle;
