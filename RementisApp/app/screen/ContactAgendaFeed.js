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
import { connect } from "react-redux";
import { getProfileData } from "../actions/rementis";

import { ContactAgenda } from "../components/ContactAgenda";
import { getSelected, setSelectedMessage } from "../actions/selects";
import { clearAgendaForm } from "../actions/agendaForm";

import { Avatar } from "react-native-elements";

const GLOBAL = require("../config/Globals");

class ContactAgendaFeed extends Component {
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
    this.props.dispatch(getSelected());
  }

  getProfileItems(profileId) {
    const profilesData = this.props.profilesData;

    let profile;

    if (profileId === -1) {
      return [];
    }

    profilesData.forEach(element => {
      if (element["customerId"] === profileId) {
        profile = element;
      }
    });

    return profile["items"];
  }

  handleAddAgendaPointButtonPress() {
    this.props.dispatch(setSelectedMessage(-1));
    this.props.dispatch(clearAgendaForm());
    this.props.navigation.navigate("AddAgendaPoint");
  }

  handleCrudButtonPress() {
    this.props.navigation.navigate("AddAgendaPoint");
  }

  render() {
    let body = (
      <ContactAgenda
        agendaItems={this.getProfileItems(this.props.selectedPatient)}
        costumerId={this.props.selectedPatient}
        onPress={() => {
          this.handleCrudButtonPress();
        }}
      />
    );
    if (this.props.isFetching) {
      body = <ActivityIndicator size="large" color="#fff" />;
    }

    return (
      <ScreenTemplate
        headertitle={"Agenda"}
        headercircles={[
          {
            icon: "md-arrow-round-back",
            label: "terug",
            onPress: () => {
              this.props.navigation.navigate("Contacts");
            }
          }
        ]}
        absoluteChildren={
          <View
            style={{
              position: "absolute",
              bottom: 70,
              right: 30
            }}
          >
            <Avatar
              medium
              rounded
              overlayContainerStyle={{ backgroundColor: GLOBAL.COLOR.BLUE }}
              icon={{ name: "add", color: GLOBAL.COLOR.WHITE }}
              onPress={() => {
                this.handleAddAgendaPointButtonPress();
              }}
              activeOpacity={0.7}
            />
          </View>
        }
      >
        {body}
      </ScreenTemplate>
    );
  }
}

const mapStateToProps = state => ({
  profilesData: state.rementis.profiles,
  isFetching: state.rementis.isFetching,
  selectedPatient: state.selects.patientSelected,
  selectedMessage: state.selects.messageSelected
});

export default connect(mapStateToProps)(ContactAgendaFeed);
