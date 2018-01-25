import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ScreenTemplate } from "../components/ScreenTemplate";
import { getProfileData } from "../actions/rementis";

import { Profile } from "../components/Profile";
import { AddAgendaPointForm } from "../components/AddAgendaPointForm";
import { getSelected } from "../actions/selects";

const GLOBAL = require("../config/Globals");

class AddAgendaPoint extends Component {
  static navigationOptions = {
    tabBarVisible: false
  };

  static propTypes = {
    navigation: PropTypes.object,
    isFetching: PropTypes.bool,
    selectedPatient: PropTypes.number,
    selectedMessage: PropTypes.number
  };

  componentWillMount() {
    this.props.dispatch(getProfileData());
    this.props.dispatch(getSelected());
  };

  handleAgendaForm() {
    this.props.navigation.navigate("ContactAgendaFeed");
  };

  render() {
    let body = (
      <AddAgendaPointForm
        onConfirm={this.handleAgendaForm.bind(this)}
        costumerId={this.props.selectedPatient}
        messageId={this.props.selectedMessage}
      />
    );
    if (this.props.isFetching) {
      body = <ActivityIndicator size="large" color="#fff" />;
    }

    return (
      <ScreenTemplate
        headertitle={"Agenda Punt"}
        headercircles={[
          {
            icon: "md-arrow-round-back",
            label: "terug",
            onPress: () => {
              this.handleAgendaForm();
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

const mapStateToProps = state => ({
  isFetching: state.rementis.isFetching,
  selectedPatient: state.selects.patientSelected,
  selectedMessage: state.selects.messageSelected
});

//export default Contacts;
export default connect(mapStateToProps)(AddAgendaPoint);
