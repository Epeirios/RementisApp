import React, { Component } from "react";
import { View, ScrollView, Text, RefreshControl } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

import { updateProfile } from "../../actions/rementis";
import { Container } from "../Container";
import { Footer, Header } from "../Header&Footer";
import { connect } from "react-redux";

class ScreenTemplate extends Component {

  _onRefresh() {
    this.props.dispatch(updateProfile());
  }

  render() {
    const {
      children,
      headercircles,
      footercircles,
      headertitle,
      footertitle,
      absoluteChildren
    } = this.props;

    let scrollViewBody;

    if (this.props.scrollRefresh) {
      scrollViewBody = (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.props.isFetching}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        >
          <View style={styles.body}>{children}</View>
        </ScrollView>
      );
    } else {
      scrollViewBody = (
        <ScrollView>
          <View style={styles.body}>{children}</View>
        </ScrollView>
      );
    }

    return (
      <Container>
        <View style={styles.container}>
          <Header circles={headercircles} title={headertitle} />
          {scrollViewBody}
          {absoluteChildren}
          <Footer circles={footercircles} title={footertitle} />
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
  absoluteChildren: PropTypes.any,
  scrollRefresh: PropTypes.bool,
  scrollRefreshFunc: PropTypes.func
};

ScreenTemplate.defaultProps = {
  children: <View />,
  headercircles: [],
  footercircles: [],
  footertitle: "",
  headertitle: "",
  absoluteChildren: <View />,
  scrollRefresh: false,
  scrollRefreshFunc: () => {}
};

const mapStateToProps = state => ({
  isFetching: state.rementis.isFetching,
});

export default connect(mapStateToProps)(ScreenTemplate);
