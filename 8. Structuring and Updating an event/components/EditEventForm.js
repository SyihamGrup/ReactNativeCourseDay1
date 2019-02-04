import React, { Component } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { formatDateTime } from "../utils/dateHelper";
import { getEvent, updateEvent } from "../service";

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#fff"
  },
  text: {
    height: 40,
    margin: 0,
    marginLeft: 7,
    marginRight: 7,
    paddingLeft: 10
  },
  borderTop: {
    borderColor: "#edeeef",
    borderTopWidth: 0.5
  },
  button: {
    height: 50,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  }
});

class EditEventForm extends Component {
  state = {
    title: null,
    date: "",
    id: ""
  };

  componentDidMount() {
    const id = this.props.navigation.getParam("id");
    getEvent(id).then(event => {
      const { title, date } = event;
      this.setState({ title, date, id });
    });
  }

  handleChangeTitle = text => {
    this.setState({
      title: text
    });
  };

  handleDatePicked = date => {
    this.setState({
      date
    });

    this.handleDatePickerHide();
  };

  handleDatePress = () => {
    this.setState({
      showDatePicker: true,
      date: ""
    });
  };

  handleDatePickerHide = () => {
    this.setState({
      showDatePicker: false
    });
  };

  handleAddPress = () => {
    if (!this.state.title || this.state.date === "") {
      alert("You need to fill out the form");
      return;
    }

    updateEvent(this.state).then(() => {
      this.props.navigation.goBack();
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.text}
            onChangeText={this.handleChangeTitle}
            placeholder="Event title"
            spellCheck={false}
            value={this.state.title}
          />
          <TextInput
            style={[styles.text, styles.borderTop]}
            placeholder="Event date"
            spellCheck={false}
            value={formatDateTime(this.state.date.toString())}
            editable={!this.state.showDatePicker}
            onFocus={this.handleDatePress}
          />
          <DateTimePicker
            isVisible={this.state.showDatePicker}
            mode="datetime"
            onConfirm={this.handleDatePicked}
            onCancel={this.handleDatePickerHide}
          />
        </View>

        <TouchableHighlight onPress={this.handleAddPress} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EditEventForm;
