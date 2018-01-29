import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { AgendaItem } from "../AgendaItem";
import CalendarStrip from "react-native-calendar-strip";
import { connect } from "react-redux";
import { setSelectedDate } from "../../actions/selects";

import styles from "./styles";

const GLOBAL = require("../../config/Globals");

class ContactAgenda extends Component {
  handleDateSelected(date) {
    date = date.format("L");

    this.props.dispatch(setSelectedDate(date));
  }

  render() {
    const { agendaItems, onPress } = this.props;

    return (
      <View style={styles.container}>
        <CalendarStrip
          daySelectionAnimation={{
            type: "border",
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: "white"
          }}
          style={styles.calender}
          calendarHeaderStyle={{ color: GLOBAL.COLOR.WHITE }}
          onDateSelected={date => {
            this.handleDateSelected(date);
          }}
        />
        <View style={styles.listContainer}>
          {agendaItems.map((item, idx) => {
            return (
              <View key={idx}>
                <AgendaItem
                  item={item}
                  onPress={onPress}
                />
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default connect()(ContactAgenda);
