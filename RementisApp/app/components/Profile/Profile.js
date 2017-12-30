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
import { TextBox } from "../TextBox";
import { Item } from "../Item";

const GLOBAL = require("../../config/Globals");

const TITLE_FONTSIZE = 18;
const FONTSIZE = 12;
const STATUS_FONTSIZE = 30;
const TEXTCOLOR = GLOBAL.COLOR.GREYBLUE;

class Profile extends Component {
  renderItem = (item, idx) => {
    <Item item={item} key={idx} />;
  };

  renderProfile = (profile, idx) => {
    const { name, profilepic, items } = profile;

    return (
      <View style={styles.profileContainer} key={idx}>
        <View style={styles.profileHeaderContainer}>
          <View style={styles.profilepicContainer}>
            <Image style={styles.profilepic} source={profilepic} />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.textContainer}>
              <TextBox fontSize={TITLE_FONTSIZE} fontColor={TEXTCOLOR}>
                {name}
              </TextBox>
            </View>
            <View style={styles.statusContainer}>
              <Circle icon={"md-checkmark"} color={GLOBAL.COLOR.GREEN} />
              <TextBox
                fontSize={STATUS_FONTSIZE}
                fontColor={GLOBAL.COLOR.GREEN}
              >
                1
              </TextBox>
              <Circle icon={"md-arrow-forward"} color={GLOBAL.COLOR.ORANGE} />
              <TextBox
                fontSize={STATUS_FONTSIZE}
                fontColor={GLOBAL.COLOR.ORANGE}
              >
                2
              </TextBox>
              <Circle icon={"md-close"} color={GLOBAL.COLOR.RED} />
              <TextBox fontSize={STATUS_FONTSIZE} fontColor={GLOBAL.COLOR.RED}>
                0
              </TextBox>
            </View>
            <View style={styles.rowSplitContainer}>
              <View style={styles.textContainer}>
                <TextBox fontSize={FONTSIZE} fontColor={TEXTCOLOR}>
                  placeholder text
                </TextBox>
              </View>
              <View style={styles.stateIconContainer}>
                <TouchableHighlight>
                  <Icon size={30} name={"md-arrow-dropdown"} color={"#000"} />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
        {items.map(this.renderItem)}
      </View>
    );
  };

  render() {
    const { list } = this.props;

    return <View style={styles.container}>{list.map(this.renderProfile)}</View>;
  }
}

export default Profile;
