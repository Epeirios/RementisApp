import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

import { Container } from "../Container";
import { Footer, Header } from "../Header&Footer";

class ScreenTemplate extends Component {
  render() {
    const { children } = this.props;

    return (
      <Container>
        <View>
          <Header />
          <ScrollView>
            <View style={styles.body}>{children}</View>
          </ScrollView>
          <Footer
            circles={[
              {
                image: require("../../resources/images/settings-512.png"),
                label: "menu"
              },
              {
                image: require("../../resources/images/settings-512.png"),
                label: "persoonlijk"
              }
            ]}            
          />
        </View>
      </Container>
    );
  }
}

ScreenTemplate.PropTypes = {
  children: PropTypes.any
};

ScreenTemplate.defaultProps = {
  children: <View />
};

export default ScreenTemplate;
