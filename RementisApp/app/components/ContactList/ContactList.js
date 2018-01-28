import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import ContactListItem from "./ContactListItem";

import styles from "./styles";

class ContactList extends Component {
  render() {
    const { contacts, onPress } = this.props;

    return (
      <View style={styles.listContainer}>
        {contacts.map((item, idx) => {        
          return (
            <View key={idx}>
              <ContactListItem contact={item} onPress={onPress} />
            </View>
          );
        })}
      </View>
    );
  }
}

export default ContactList;
