import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";

import styles from "./styles";
import { Circle } from "../Circle";
import Icon from "react-native-vector-icons/Ionicons";
import { TextBox } from "../TextBox";
import { agendaPointStatesEnum } from "../../enums";

import { setSelectedMessage } from "../../actions/selects";
import { setAgendaForm } from "../../actions/agendaForm";
import { getProfileData } from "../../actions/rementis";

import { connect } from "react-redux";

import { Avatar, Divider } from "react-native-elements";
import { Panel } from "../../components/Panel";

const GLOBAL = require("../../config/Globals");

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

    this.props.onPress();
  }

  handleRemoveItem(messageId) {
    let url = `http://rementisapi.azurewebsites.net/api/Agendadata/${messageId}`;

    fetch(url, {
      method: "DELETE"
    });

    this.props.dispatch(getProfileData());
  }

  handleCloseButton(messageId) {
    Alert.alert(
      "Verwijder Agenda Punt",
      "Weet je zeker dat je het wilt verwijderen?",
      [
        {
          text: "Ja",
          onPress: () => this.handleRemoveItem(messageId)
        },
        {
          text: "Nee",
          style: "cancel"
        }
      ],
      { cancelable: true }
    );
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
        statusContainer = (
          <Circle icon={"md-alert"} color={GLOBAL.COLOR.GREYBLUE} />
        );
    }

    let importantContainer = <View />;

    if (priority) {
      importantContainer = <Avatar small rounded icon={{ name: "warning" }} />;
    }

    let header;

    header = (
      <View style={styles.headerContainer}>
        {statusContainer}
        <View style={styles.headerDetailsContainer}>
          <TextBox fontSize={TITLE_FONTSIZE} fontColor={TEXTCOLOR}>
            {title}
          </TextBox>
          <TextBox fontSize={FONTSIZE} fontColor={TEXTCOLOR}>
            {`${startTime} - ${endTime}`}
          </TextBox>
        </View>
      </View>
    );

    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Panel title={title} header={header}>
            <View style={styles.bodyContainer}>
              <View style={styles.detailsContainer}>
                <Divider style={{ backgroundColor: GLOBAL.COLOR.GREYBLUE }} />
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "flex-start",
                      fontSize: FONTSIZE,
                      color: TEXTCOLOR,
                      justifyContent: "flex-start",
                      alignItems: "flex-start"
                    }}
                  >
                    {description}
                  </Text>
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
                  onPress={() => this.handleCloseButton(messageId)}
                  activeOpacity={0.7}
                />
              </View>
            </View>
          </Panel>
        </View>
      </View>
    );
  }
}

export default connect()(AgendaItem);
