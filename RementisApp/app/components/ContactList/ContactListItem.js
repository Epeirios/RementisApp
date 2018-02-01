import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-elements";
import styles from "./styles";
import { Circle } from "../Circle";
import TextBox from "../TextBox/TextBox";
import { agendaPointStatesEnum, gendersEnum } from "../../enums";

import { setSelectedPatient } from "../../actions/selects";
import { connect } from "react-redux";

import moment from "moment";

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
  handleButtonPress(patientId) {
    this.props.dispatch(setSelectedPatient(patientId));
    this.props.onPress();
  }

  getAgendaItems(date) {
    const { agenda } = this.props.profile;

    let items = [];

    agenda.forEach(element => {
      if (element["date"] === date) {
        items = element["items"];
      }
    });

    return items;
  }

  render() {
    const {
      firstName,
      lastName,
      gender,
      agenda,
      customerId
    } = this.props.profile;

    let avatarPic = require("../../resources/images/opa1.jpg");

    if (gender === gendersEnum.female) {
      avatarPic = require("../../resources/images/oma1.jpg");
    }

    let currentDate = moment().format("L");

    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profilepicContainer}>
            <Avatar large rounded source={avatarPic} />
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.textContainer}>
              <TextBox fontSize={TITLE_FONTSIZE} fontColor={TEXTCOLOR}>
                {`${firstName} ${lastName}`}
              </TextBox>
            </View>
            <View style={styles.statusContainer}>
              <Circle icon={"md-checkmark"} color={GLOBAL.COLOR.GREEN} />
              <TextBox
                fontSize={STATUS_FONTSIZE}
                fontColor={GLOBAL.COLOR.GREEN}
              >
                {GetStatusCount(
                  this.getAgendaItems(currentDate),
                  agendaPointStatesEnum.completed
                )}
              </TextBox>
              <Circle icon={"md-arrow-forward"} color={GLOBAL.COLOR.ORANGE} />
              <TextBox
                fontSize={STATUS_FONTSIZE}
                fontColor={GLOBAL.COLOR.ORANGE}
              >
                {GetStatusCount(this.getAgendaItems(currentDate), agendaPointStatesEnum.pending)}
              </TextBox>
              <Circle icon={"md-close"} color={GLOBAL.COLOR.RED} />
              <TextBox fontSize={STATUS_FONTSIZE} fontColor={GLOBAL.COLOR.RED}>
                {GetStatusCount(this.getAgendaItems(currentDate), agendaPointStatesEnum.failed)}
              </TextBox>
            </View>
          </View>

          <View style={styles.selectorContainer}>
            <Avatar
              medium
              rounded
              overlayContainerStyle={{ backgroundColor: GLOBAL.COLOR.WHITE }}
              icon={{ name: "arrow-forward", color: GLOBAL.COLOR.GREYBLUE }}
              onPress={() => {
                this.handleButtonPress(customerId);
              }}
              activeOpacity={0.7}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default connect()(ContactListItem);
