import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import styles from "./styles";
import { Circle } from "../Circle";
import Icon from "react-native-vector-icons/Ionicons";
import { TextBox } from "../TextBox";
import { agendaPointStatesEnum } from "../../enums";

import { setSelectedMessage } from "../../actions/selects";
import { setAgendaForm } from "../../actions/agendaForm";
import { connect } from "react-redux";

import { Avatar } from "react-native-elements";

const GLOBAL = require("../../config/Globals");

const temp = {
  messageId: 4,
  title: "Medicatie innemen",
  patientId: 2,
  description: "Met Truus bellen over het kampioenschap bridgen",
  startDate: "12-01-2018",
  endDate: "12-01-2018",
  startTime: "13:00",
  endTime: "13:00",
  priority: false,
  state: agendaPointStatesEnum.completed
};

const TITLE_FONTSIZE = 18;
const FONTSIZE = 12;
const STATUS_FONTSIZE = 30;
const TEXTCOLOR = GLOBAL.COLOR.GREYBLUE;

class AgendaItem extends Component {
  handleBrushButton(item) {
    this.props.dispatch(setSelectedMessage(item.messageId));
    this.props.dispatch(
      setAgendaForm({
        title: item.title,
        description: item.description,
        startDate: item.startDate,
        endDate: item.endDate,
        startTime: item.startTime,
        endTime: item.endTime,
        priority: item.priority
      })
    );

    console.log("item", JSON.stringify(item));

    this.props.onPress();
  }

  render() {
    const {
      messageId,
      title,
      customerId,
      description,
      startDate,
      endDate,
      startTime,
      endTime,
      priority,
      state
    } = this.props.item;

    let statusContainer;

    switch (state) {
      case agendaPointStatesEnum.completed:
        statusContainer = (
          <Circle icon={"md-checkmark"} color={GLOBAL.COLOR.GREEN} />
        );
        break;
      case agendaPointStatesEnum.pending:
        statusContainer = (
          <Circle icon={"md-arrow-forward"} color={GLOBAL.COLOR.ORANGE} />
        );
        break;
      case agendaPointStatesEnum.failed:
        statusContainer = <Circle icon={"md-close"} color={GLOBAL.COLOR.RED} />;
        break;
      default:
        statusContainer = <View />;
    }

    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={styles.statusContainer}>{statusContainer}</View>

          <View style={styles.detailsContainer}>
            <View style={styles.textContainer}>
              <TextBox fontSize={TITLE_FONTSIZE} fontColor={TEXTCOLOR}>
                {title}
              </TextBox>
            </View>
          </View>

          <View style={styles.crudContainer}>
            <Avatar
              small
              rounded
              overlayContainerStyle={{ backgroundColor: GLOBAL.COLOR.BLUE }}
              icon={{ name: "brush", color: GLOBAL.COLOR.WHITE }}
              onPress={() => {
                this.handleBrushButton(this.props.item);
              }}
              activeOpacity={0.7}
            />
            <Avatar
              small
              rounded
              overlayContainerStyle={{ backgroundColor: GLOBAL.COLOR.RED }}
              icon={{ name: "close", color: GLOBAL.COLOR.WHITE }}
              onPress={() => console.log("close")}
              activeOpacity={0.7}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default connect()(AgendaItem);
