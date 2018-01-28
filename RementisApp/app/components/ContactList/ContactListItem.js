import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-elements";
import styles from "./styles";
import { Circle } from "../Circle";
import TextBox from "../TextBox/TextBox";
import { agendaPointStatesEnum } from "../../enums";

import { setSelectedPatient } from "../../actions/selects";
import { connect } from "react-redux";

const GLOBAL = require("../../config/Globals");

const TITLE_FONTSIZE = 18;
const FONTSIZE = 12;
const STATUS_FONTSIZE = 30;
const TEXTCOLOR = GLOBAL.COLOR.GREYBLUE;

const GetStatusCount = (array, state) => {
  let counter = 0;

  array.forEach(element => {
    if (element.state == state) {
      counter++;
    }
  });

  return String(counter);
};

class ContactListItem extends Component {
  handleButtonPress(patientId){
    this.props.dispatch(setSelectedPatient(patientId));
    this.props.onPress();
  }

  render() {
    const { voornaam, achternaam, profilePic, items, customerId } = this.props.contact;

    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profilepicContainer}>
            <Avatar
              large
              rounded
              source={profilePic}
            />
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.textContainer}>
              <TextBox fontSize={TITLE_FONTSIZE} fontColor={TEXTCOLOR}>
                {`${voornaam} ${achternaam}`}
              </TextBox>
            </View>
            <View style={styles.statusContainer}>
              <Circle icon={"md-checkmark"} color={GLOBAL.COLOR.GREEN} />
              <TextBox
                fontSize={STATUS_FONTSIZE}
                fontColor={GLOBAL.COLOR.GREEN}
              >
                {GetStatusCount(items, agendaPointStatesEnum.completed)}
              </TextBox>
              <Circle icon={"md-arrow-forward"} color={GLOBAL.COLOR.ORANGE} />
              <TextBox
                fontSize={STATUS_FONTSIZE}
                fontColor={GLOBAL.COLOR.ORANGE}
              >
                {GetStatusCount(items, agendaPointStatesEnum.pending)}
              </TextBox>
              <Circle icon={"md-close"} color={GLOBAL.COLOR.RED} />
              <TextBox fontSize={STATUS_FONTSIZE} fontColor={GLOBAL.COLOR.RED}>
                {GetStatusCount(items, agendaPointStatesEnum.failed)}
              </TextBox>
            </View>
          </View>

          <View style={styles.selectorContainer}>
            <Avatar
              medium
              rounded
              overlayContainerStyle={{backgroundColor: GLOBAL.COLOR.WHITE}}
              icon={{name: "arrow-forward", color: GLOBAL.COLOR.GREYBLUE}}
              onPress={() => {this.handleButtonPress(customerId)}}
              activeOpacity={0.7}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default connect()(ContactListItem);
