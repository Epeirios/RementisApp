import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './styles';

export default class Header extends Component {

  render() {
    const {children} = this.props;

    return (
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
  }
}