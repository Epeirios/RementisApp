import React, { Component } from "react";
import {
  FlatList,
  View,
  ScrollView,
  Text,
  ActivityIndicator
} from "react-native";
import { ScreenTemplate } from "../components/ScreenTemplate";
import PropTypes from "prop-types";
import { Container } from "../components/Container";
import { Footer, Header } from "../components/Header&Footer";
import { TextBox } from "../components/TextBox";
import { Profile } from "../components/Profile";
import { connect } from "react-redux";
import { getProfileData } from "../actions/rementis";

//import { ContactList } from "../components/ContactList";

const GLOBAL = require("../config/Globals");

class Feed extends Component {
  static navigationOptions = {
    tabBarVisible: false
  };

  static propTypes = {
    navigation: PropTypes.object,
    profilesData: PropTypes.array,
    isFetching: PropTypes.bool,
    dispatch: PropTypes.func
  };

  componentWillMount() {
    this.props.dispatch(getProfileData());
  }

  render() {
    let body = <Profile list={this.props.profilesData} />;
    if (this.props.isFetching) {
      body = <ActivityIndicator size="large" color="#fff" />;
    }

    return (
      <ScreenTemplate
        headertitle={"Activiteiten"}
        headercircles={[
          {
            icon: "md-arrow-round-back",
            label: "terug",
            onPress: () => {
              this.props.navigation.goBack(null);
            }
          }
        ]}
      >
        {body}
      </ScreenTemplate>
    );
  }
}

const mapStateToProps = state => {
  const profilesData = state.rementis.profiles;
  const isFetching = state.rementis.isFetching;

  return {
    profilesData,
    isFetching
  };
};

export default connect(mapStateToProps)(Feed);
