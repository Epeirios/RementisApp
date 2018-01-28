import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import styles from "./styles";

import CheckBox from "react-native-checkbox";

class List extends Component {
  renderItem = (item, idx) => {
    return (
      <View style={styles.row} key={idx}>
        <CheckBox
          label={item.text}
          checked={item.checked}
        />
      </View>
    );
  };

  render() {
    const { list } = this.props;

    return <View style={styles.container}>{list.map(this.renderItem)}</View>;
  }
}

export default List;
