import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import HFContainer from "./HFContainer";
//import styles from "./styles";

class Header extends Component {
  render() {
    const { circles, title } = this.props;

    return (
      <View>
        <HFContainer isHeader={true} circles={circles} title={title} />
      </View>
    );
  }
}

Header.PropTypes = {
  circles: PropTypes.any,
  title: PropTypes.string
};

Header.defaultProps = {
  circles: [],
  title: ""
};

export default Header;
