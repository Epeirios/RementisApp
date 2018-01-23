import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

import { Circle } from "../Circle";
import TextBox from "../TextBox/TextBox";

class ContactListItem extends Component {
  render() {
    const { firstName, lastName, profilePic } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profilepicContainer}>
            <Image style={styles.profilepic} source={profilePic} />
          </View>
          <View style={styles.nameContainer}>
            <TextBox>{`${firstName} ${lastName}`}</TextBox>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Circle />
        </View>
      </View>
    );
  }
}

export default ContactListItem;
