import React, { Component } from "react";
import { formatDateTime } from "../utils/dateHelper";
import { getEvent, updateEvent } from "../service";
import Form from "../shared/Form";

class EditEventForm extends Component {
  state = {
    title: null,
    date: "",
    pickedDate: "",
    id: ""
  };

  componentDidMount() {
    const id = this.props.navigation.getParam("id");
    getEvent(id).then(event => {
      const { title, date } = event;
      const convertedDate = formatDateTime(date.toString());
      this.setState({ title, date, id });
      this.setState({ pickedDate: convertedDate });
    });
  }

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
      <Form
        onChangeText={this.handleChangeTitle}
        editable={!this.state.showDatePicker}
        onFocus={this.handleDatePress}
        isVisible={this.state.showDatePicker}
        onConfirm={this.handleDatePicked}
        onCancel={this.handleDatePickerHide}
        onPress={this.handleAddPress}
        title={this.state.title}
        pickedDate={this.state.pickedDate}
        textButton="Update"
      />
    );
  }
}

export default EditEventForm;
