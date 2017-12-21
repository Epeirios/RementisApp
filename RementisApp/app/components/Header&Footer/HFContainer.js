import React, { Component } from "react";
import PropTypes, { object } from "prop-types";
import { View } from "react-native";

import { Circle } from "../Circle";

import styles from "./styles";
import TextBox from "../TextBox/TextBox";
const GLOBAL = require("../../config/Globals");

const temp = [
  {
    image: require("../../resources/images/settings-512.png"),
    label: "blalba"
  },
  {
    image: require("../../resources/images/settings-512.png"),
    label: "hallo"
  }
];

class HFContainer extends Component {
  renderCircle({ circle, index }) {
    const { label, image } = circle;
    const { isHeader } = this.props;

    return (
      <Circle
        image={image}
        label={label}
        labelAbove={isHeader}
        color={GLOBAL.COLOR.GREYBLUE}
        key={index}
      />
    );
  }

  render() {
    const { isHeader, circles } = this.props;

    let container;

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
          <View style={[styles.hfbody, styles.header]} />
          {circlebox}
        </View>
      );
    } else {
      container = (
        <View>
          {circlebox}
          <View style={[styles.hfbody, styles.footer]} />
        </View>
      );
    }

    return <View style={styles.container}>{container}</View>;
  }
}

HFContainer.PropTypes = {
  circles: PropTypes.arrayOf(object),
  isHeader: PropTypes.bool
};

HFContainer.defaultProps = {
  circles: [],
  isHeader: true
};

export default HFContainer;
