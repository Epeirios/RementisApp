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

    const titlecontainer = (
      <View>
        <TextBox
         fontColor={GLOBAL.COLOR.BLUE}
         fontSize={30} 
        >{title}</TextBox>
      </View>
    );

    const circlebox = (
      <View style={styles.innerbox}>
        {circles.map((circle, index) => {
          return this.renderCircle({ circle, index });
        })}
      </View>
    );

    if (isHeader) {
      container = (
        <View>
          <View style={[styles.hfbody, styles.header]}>{titlecontainer}</View>
          {circlebox}
        </View>
      );
    } else {
      container = (
        <View>
          {circlebox}
          <View style={[styles.hfbody, styles.footer]}>{titlecontainer}</View>
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
