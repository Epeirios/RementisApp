import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { AgendaItem } from "../AgendaItem";
import styles from "./styles";

const GLOBAL = require("../../config/Globals");

class ContactAgenda extends Component {
  renderItem(item, idx, onPress) {
    return (
      <View key={idx}>
        <AgendaItem item={item} onPress={onPress} />
      </View>
    );
  }

  render() {
    const { agendaItems, costumerId, onPress } = this.props;

    console.log("costumerId: " + costumerId);
    console.log("agendaItems: " + JSON.stringify(agendaItems));

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
