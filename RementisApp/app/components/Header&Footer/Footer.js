import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import HFContainer from "./HFContainer";
//import styles from "./styles";

class Footer extends Component {
  render() {
    return (
      <View>
        <HFContainer isHeader={false} circles={this.props.circles} />
      </View>
    );
  }
}

Footer.PropTypes = {
  circles: PropTypes.any
};

Footer.defaultProps = {
  circles: []
};

export default Footer;
