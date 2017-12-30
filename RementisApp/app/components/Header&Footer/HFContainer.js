import React, { Component } from "react";
import PropTypes, { object } from "prop-types";
import { View } from "react-native";

import { Circle } from "../Circle";

import styles from "./styles";
import TextBox from "../TextBox/TextBox";

const GLOBAL = require("../../config/Globals");

class HFContainer extends Component {
  renderCircle({ circle, index }) {
    const { label, icon, onPress } = circle;
    const { isHeader } = this.props;

    return (
      <Circle
        icon={icon}
        label={label}
        labelAbove={isHeader}
        color={GLOBAL.COLOR.GREYBLUE}
        key={index}
        onPress={onPress}
      />
    );
  }

  render() {
    const { isHeader, circles, title } = this.props;

    let container;

    /** titleContainer */
    const titleContainer = (
      <View>
        <TextBox fontColor={GLOBAL.COLOR.BLUE} fontSize={30}>
          {title}
        </TextBox>
      </View>
    );

    /** circleContainer */
    const cirlceContainer = (
      <View style={styles.circleContainer}>
        {circles.map((circle, index) => {
          return this.renderCircle({ circle, index });
        })}
      </View>
    );

    /** container */
    if (isHeader) {
      container = (
        <View>
          <View style={[styles.hfbody, styles.header]}>{titleContainer}</View>
          {cirlceContainer}
        </View>
      );
    } else {
      container = (
        <View>
          {cirlceContainer}
          <View style={[styles.hfbody, styles.footer]}>{titleContainer}</View>
        </View>
      );
    }

    return <View style={styles.container}>{container}</View>;
  }
}

HFContainer.PropTypes = {
  circles: PropTypes.arrayOf(object),
  isHeader: PropTypes.bool,
  title: PropTypes.string
};

HFContainer.defaultProps = {
  circles: [],
  isHeader: true,
  title: ""
};

export default HFContainer;
