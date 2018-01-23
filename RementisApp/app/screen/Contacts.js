import React, { Component, version } from "react";
import { View, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ScreenTemplate } from "../components/ScreenTemplate";
//import { ContactList } from "../components/ContactList/ContactList";
import { getProfileData } from "../actions/rementis";

import { Profile } from "../components/Profile";
import { ContactList } from "../components/ContactList/index";

const GLOBAL = require("../config/Globals");

class Contacts extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  }

  static propTypes = {
    navigation: PropTypes.object,    
    profilesData: PropTypes.array,
  };

  componentWillMount() {
    this.props.dispatch(getProfileData());
  }

  render() {
    let body = <ContactList contacts={this.props.profilesData}/>;
    if (this.props.isFetching) {
      body = <ActivityIndicator size="large" color="#fff" />;
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

//export default Contacts;
export default connect(mapStateToProps)(Contacts);
