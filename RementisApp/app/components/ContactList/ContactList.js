import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import ContactListItem from "./ContactListItem";

import styles from "./styles";

class ContactList extends Component {
  render() {
    const { profiles, onPress } = this.props;

    return (
      <View style={styles.listContainer}>
        {profiles.map((item, idx) => {
          return (
            <View key={idx}>
              <ContactListItem profile={item} onPress={onPress} />
            </View>
          );
        })}
      </View>
    );
  }
}

export default ContactList;
