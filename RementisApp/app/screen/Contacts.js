import React, { Component, version } from "react";
import { View, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ScreenTemplate } from "../components/ScreenTemplate";
import { getProfileData } from "../actions/rementis";

import { ContactList } from "../components/ContactList/index";

const GLOBAL = require("../config/Globals");

class Contacts extends Component {
  static navigationOptions = {
    tabBarVisible: false
  };

  static propTypes = {
    navigation: PropTypes.object,
    profilesData: PropTypes.array
  };

  componentWillMount() {
    this.props.dispatch(getProfileData());
  }

  handleOnPress() {
    this.props.navigation.navigate("ContactAgendaFeed");
  }

  render() {
    let body = (
      <ContactList
        profiles={this.props.profilesData}
        onPress={this.handleOnPress.bind(this)}
      />
    );
    if (this.props.isFetching) {
      <View />;
    }

    return (
      <ScreenTemplate
        headertitle={"Contacten"}
        headercircles={[
          {
            icon: "md-arrow-round-back",
            label: "terug",
            onPress: () => {
              this.props.navigation.goBack(null);
            }
          }
        ]}
        scrollRefresh={true}
      >
        {body}
      </ScreenTemplate>
    );
  }
}

const mapStateToProps = state => ({
  profilesData: state.rementis.profiles,
  isFetching: state.rementis.isFetching
});

export default connect(mapStateToProps)(Contacts);
