import React, { Component } from "react";
import { formatDateTime } from "../utils/dateHelper";
import { saveEvent } from "../service";
import Form from "../shared/Form";

class EventForm extends Component {
  state = {
    title: "",
    date: "",
    pickedDate: ""
  };

  /*
  React.js web version:
  event =>
  event.currentTarget.value to get the text
  */
  handleChangeTitle = title => {
    this.setState({ title });
  };

  handleDatePicked = date => {
    const newDate = formatDateTime(date.toString());
    this.setState({
      pickedDate: newDate
    });

    this.setState({
      date
    });

    this.handleDatePickerHide();
  };

  handleDatePickerHide = () => {
    this.setState({
      showDatePicker: false
    });
  };

  handleDatePress = () => {
    this.setState({
      showDatePicker: true
    });
  };

  handleAddPress = () => {
    if (!this.state.title || this.state.date === "") {
      alert("You need to fill out the form");
      return;
    }
    saveEvent(this.state).then(() => {
      this.props.navigation.goBack();
    });
  };

  render() {
    return (
      <Form
        onChangeText={this.handleChangeTitle}
        editable={!this.state.showDatePicker}
        onFocus={this.handleDatePress}
        isVisible={this.state.showDatePicker}
        onConfirm={this.handleDatePicked}
        onCancel={this.handleDatePickerHide}
        onPress={this.handleAddPress}
        pickedDate={this.state.pickedDate}
        textButton="Add"
      />
    );
  }
}

export default EventForm;
