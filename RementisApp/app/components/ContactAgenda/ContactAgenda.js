import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { AgendaItem } from "../AgendaItem";
import styles from "./styles";

const GLOBAL = require("../../config/Globals");

class ContactAgenda extends Component {
  render() {
    const { agendaItems, onPress } = this.props;

    return (
      <View style={styles.listContainer}>
        {agendaItems.map((item, idx) => {
          return (
            <View key={idx}>
              <AgendaItem item={item} onPress={onPress} />
            </View>
          );;
        })}
      </View>
    );
  }
}

export default ContactAgenda;
