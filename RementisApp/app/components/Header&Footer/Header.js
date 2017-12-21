import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import HFContainer from "./HFContainer";
//import styles from "./styles";

class Header extends Component {
  render() {
    return (
      <View>
        <HFContainer isHeader={true} circles={this.props.circles} />
      </View>
    );
  }
}

Header.PropTypes = {
  circles: PropTypes.any
};

Header.defaultProps = {
  circles: []
};

export default Header;
