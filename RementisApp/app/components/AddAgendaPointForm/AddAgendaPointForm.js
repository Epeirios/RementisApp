import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Keyboard } from "react-native";

import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  CheckBox,
  Button,
  Divider
} from "react-native-elements";

import DateTimePicker from "react-native-modal-datetime-picker";
import { connect } from "react-redux";
import { getProfileData } from "../../actions/rementis";
import { 
  toggleAgendaFormImportant,
  setAgendaFormTitle,
  setAgendaFormDescription,
  setAgendaFormStartTime,
  setAgendaFormEndTime,
  clearAgendaForm
 } from "../../actions/agendaForm";

import styles from "./styles";

class AddAgendaPointForm extends Component {
  static propTypes = {
    costumerId: PropTypes.number,
    messageId: PropTypes.number
  };

  componentWillMount() {
    this.props.dispatch(getProfileData());
    this.setState({
      isStartTimePickerVisible: false,
      isEndTimePickerVisible: false
    })
  }

  _showStartTimePicker = () => {
    Keyboard.dismiss();
    this.setState({ isStartTimePickerVisible: true });
  };

  _showEndTimePicker = () => {
    Keyboard.dismiss();
    this.setState({ isEndTimePickerVisible: true });
  };

  _hideStartTimePicker = () =>
    this.setState({ isStartTimePickerVisible: false });

  _hideEndTimePicker = () => this.setState({ isEndTimePickerVisible: false });

  _handleStartTimePicked = date => {
    time = date.toString();
    time = time.slice(16, 24);

    this.props.dispatch(setAgendaFormStartTime(time));
    this._hideStartTimePicker();
  };

  _handleEndTimePicked = date => {
    time = date.toString();
    time = time.slice(16, 24);

    this.props.dispatch(setAgendaFormEndTime(time));
    this._hideEndTimePicker();
  };

  _handleCheckBox = () => {
    this.props.dispatch(toggleAgendaFormImportant());
  };

  _handleButtonPress = () => {
    let method = "POST";

    if (this.props.costumerId === -1) {
      return;
    }

    if (this.props.messageId !== -1) {
      //method = "PUT"
    }

    this._sendAgendaItem(method);
    this.props.dispatch(clearAgendaForm());
    this.props.onConfirm();
  };

  _sendAgendaItem = method => {
    let url;

    switch (method) {
      case "POST":
        url = "https://rementisapi.azurewebsites.net/agendaitem";
        break;

      default:
        url = "https://rementisapi.azurewebsites.net/agendaitem";
        break;
    }

    fetch(url, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Titel: this.props.agendaForm.title,
        CostumerId: this.props.messageId,
        Description: this.props.agendaForm.description,
        StartDate: this.props.agendaForm.startDate,
        EndDate: this.props.agendaForm.endDate,
        StartTime: this.props.agendaForm.startTime,
        EndTime: this.props.agendaForm.startTime,
        Priority: this.props.agendaForm.isImportant
      })
    });
  };

  render() {
    let buttonTitle = "Toevoegen";

    if (this.props.messageId != -1) {
      buttonTitle = "Aanpassen";
    }

    return (
      <View>
        <FormLabel labelStyle={styles.text}>Titel</FormLabel>
        <FormInput
          inputStyle={styles.text}
          onChangeText={title => this.props.dispatch(setAgendaFormTitle(title))}
          ref={inputTitle => (this.inputTitle = inputTitle)}
          value={this.props.agendaForm.title}
        />
        <FormLabel labelStyle={styles.text}>Beschrijving</FormLabel>
        <FormInput
          inputStyle={styles.text}
          onChangeText={description =>
            this.props.dispatch(setAgendaFormDescription(description))
          }
          multiline={true}
          ref={inputDesc => (this.inputDesc = inputDesc)}
          value={this.props.agendaForm.description}
        />
        <FormLabel labelStyle={styles.text}>Start Tijd</FormLabel>
        <FormInput
          inputStyle={styles.text}
          onFocus={this._showStartTimePicker}
          value={this.props.agendaForm.startTime}
        />
        <FormLabel labelStyle={styles.text}>Eind Tijd</FormLabel>
        <FormInput
          inputStyle={styles.text}
          onFocus={this._showEndTimePicker}
          value={this.props.agendaForm.endTime}
        />
        <FormLabel labelStyle={styles.text}>Prioriteit</FormLabel>
        <CheckBox
          title="Belangrijk"
          checked={this.props.agendaForm.priority}
          onPress={this._handleCheckBox}
          value={this.props.agendaForm.priority}
        />

        <DateTimePicker
          isVisible={this.state.isStartTimePickerVisible}
          onConfirm={this._handleStartTimePicked}
          onCancel={this._hideStartTimePicker}
          mode={"time"}
        />
        <DateTimePicker
          isVisible={this.state.isEndTimePickerVisible}
          onConfirm={this._handleEndTimePicked}
          onCancel={this._hideEndTimePicker}
          mode={"time"}
        />

        <Divider style={styles.divider} />

        <Button
          buttonStyle={styles.button}
          color={"#2196F3"}
          title={buttonTitle}
          onPress={this._handleButtonPress}
          rounded={true}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  agendaForm: state.agendaForm,
});

export default connect(mapStateToProps)(AddAgendaPointForm);
