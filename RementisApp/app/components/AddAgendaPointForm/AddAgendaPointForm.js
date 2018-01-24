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

import styles from "./styles";

class AddAgendaPointForm extends Component {
  state = {
    isStartTimePickerVisible: false,
    isEndTimePickerVisible: false,
    startTime: "",
    endTime: "",
    isImportant: false,
    title: "",
    description: "",
    startDate: "",
    endDate: ""
  };

  static propTypes = {
    costumerId: PropTypes.number,
    messageId: PropTypes.number
  };

  componentWillMount() {
    this._setDate();
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

    this.setState({ startTime: time });
    this._hideStartTimePicker();
  };

  _handleEndTimePicked = date => {
    time = date.toString();
    time = time.slice(16, 24);

    this.setState({ endTime: time });
    this._hideEndTimePicker();
  };

  _handleCheckBox = () => {
    this.setState({ isImportant: !this.state.isImportant });
  };

  _handleButtonPress = () => {
    let method = "POST";

    if (this.props.costumerId === -1) {
      return;
    }

    if(this.props.messageId !== -1){
      //method = "PUT"
    }

    this._sendAgendaItem(method);
    this._resetFields();
    this.props.onConfirm();
  };

  _setDate = () => {
    const today = new Date();
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    this.setState({
      startDate: date,
      endDate: date
    });
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
        Titel: this.state.title,
        CostumerId: this.props.costumerId,
        Description: this.state.description,
        StartDate: this.state.startDate,
        EndDate: this.state.endDate,
        StartTime: this.state.startTime,
        EndTime: this.state.startTime,
        Priority: this.state.isImportant
      })
    });
  };

  _resetFields = () => {
    this.setState({
      isStartTimePickerVisible: false,
      isEndTimePickerVisible: false,
      startTime: "",
      endTime: "",
      isImportant: false,
      title: "",
      description: "",
      startDate: "",
      endDate: ""
    });

    this.inputTitle.clearText();
    this.inputDesc.clearText();
  };
  render() {
    return (
      <View>
        <FormLabel labelStyle={styles.text}>Titel</FormLabel>
        <FormInput
          inputStyle={styles.text}
          onChangeText={title => this.setState({ title: title })}
          ref={inputTitle => (this.inputTitle = inputTitle)}
        />
        <FormLabel labelStyle={styles.text}>Beschrijving</FormLabel>
        <FormInput
          inputStyle={styles.text}
          onChangeText={description =>
            this.setState({ description: description })
          }
          multiline={true}
          ref={inputDesc => (this.inputDesc = inputDesc)}
        />
        <FormLabel labelStyle={styles.text}>Start Tijd</FormLabel>
        <FormInput
          inputStyle={styles.text}
          onFocus={this._showStartTimePicker}
          value={this.state.startTime}
        />
        <FormLabel labelStyle={styles.text}>Eind Tijd</FormLabel>
        <FormInput
          inputStyle={styles.text}
          onFocus={this._showEndTimePicker}
          value={this.state.endTime}
        />
        <FormLabel labelStyle={styles.text}>Prioriteit</FormLabel>
        <CheckBox
          title="Belangrijk"
          checked={this.state.isImportant}
          onPress={this._handleCheckBox}
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
          title="Toevoegen"
          onPress={this._handleButtonPress}
          rounded={true}
        />
      </View>
    );
  }
}

export default AddAgendaPointForm;
