import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";

import styles from "./styles";
import { Circle } from "../Circle/index";
import Icon from "react-native-vector-icons/Ionicons";

const GLOBAL = require("../../config/Globals");

class Profile extends Component {
  render() {
    const { Profile } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.profilepicContainer}>
          <Image
            style={styles.profilepic}
            source={require("../../resources/images/opa1.jpg")}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.textContainer}>
            <Text>test</Text>
          </View>
          <View style={styles.statusContainer}>
            <Circle icon={"md-checkmark"} color={GLOBAL.COLOR.GREEN} />
            <Circle icon={"md-checkmark"} color={GLOBAL.COLOR.ORANGE} />
            <Circle icon={"md-close"} color={GLOBAL.COLOR.RED} />
          </View>
          <View style={styles.rowSplitContainer}>
            <View style={styles.textContainer}>
              <Text>test</Text>
            </View>
            <View style={styles.stateIconContainer}>
              <TouchableHighlight>
                <Icon size={18} name={"md-arrow-dropdown"} color={"#000"} />
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;
