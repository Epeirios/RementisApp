import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import ContactListItem from "./ContactListItem";

import styles from "./styles";

class ContactList extends Component {
  renderItem(item, idx) {
    return (
      <View key={idx}>
        <ContactListItem contact={item} />
      </View>
    );
  }

  render() {
    const { contacts } = this.props;

    return (
      <View style={styles.listContainer}>
        {contacts.map(this.renderItem)}
      </View>
    );
  }
}

export default ContactList;
