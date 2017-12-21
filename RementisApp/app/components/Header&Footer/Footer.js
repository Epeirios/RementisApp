import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import HFContainer from "./HFContainer";
//import styles from "./styles";

class Footer extends Component {
  render() {
    const {circles, title} = this.props;
    return (
      <View>
        <HFContainer isHeader={false} circles={circles}
        title={title}
        />
      </View>
    );
  }
}

Footer.PropTypes = {
  circles: PropTypes.any,
  title: PropTypes.string,
};

Footer.defaultProps = {
  circles: [],
  title: '',
};

export default Footer;
