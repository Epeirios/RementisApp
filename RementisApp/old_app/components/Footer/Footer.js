import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class Footer extends Component {

  render() {
    const { children, onPress } = this.props;

    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => onPress()}
        >
          <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
