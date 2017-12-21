import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

import { Container } from "../Container";
import { Footer, Header } from "../Header&Footer";

class ScreenTemplate extends Component {
  render() {
    const { children, headercircles, footercircles, headertitle, footertitle } = this.props;

    return (
      <Container>
        <View>
          <Header 
          circles={headercircles}
          title={headertitle}
          />
          <ScrollView>
            <View style={styles.body}>{children}</View>
          </ScrollView>
          <Footer
            circles={footercircles}
            title={footertitle}            
          />
        </View>
      </Container>
    );
  }
}

ScreenTemplate.PropTypes = {
  children: PropTypes.any,
  headercircles: PropTypes.any,
  footercircles: PropTypes.any,
  footertitle: PropTypes.string,
  headertitle: PropTypes.string,
};

ScreenTemplate.defaultProps = {
  children: <View />,
  headercircles: [],
  footercircles: [],  
  footertitle: '',
  headertitle: '',
};

export default ScreenTemplate;
