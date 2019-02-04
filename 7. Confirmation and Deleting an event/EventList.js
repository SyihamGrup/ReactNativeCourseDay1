import React, { Component } from "react";
import { StyleSheet, FlatList, Alert } from "react-native";
import ActionButton from "react-native-action-button";

import EventCard from "./EventCard";

import { getEvents, deleteEvent } from "./api";

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 5
  }
});

class EventList extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now()
        }))
      });
    }, 1000);

    this.props.navigation.addListener("didFocus", () => {
      getEvents().then(events => this.setState({ events }));
    });
  }

  handleAddEvent = () => {
    this.props.navigation.navigate("form");
  };

  handleOnPress = id => {
    alert(`handleOnPress ${id}`, "Test", ["a", "b"]);
  };

  handleLongPress = id => {
    Alert.alert(
      "Deleting reminder",
      "Are you sure you want to delete this reminder?",
      [
        {
          text: "Cancel",
          onPress: () => console.warn("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            console.warn("Yes Pressed");
            deleteEvent(id);

            const events = this.state.events.filter(e => e.id !== id);
            console.log(events);
            this.setState({
              events
            });
          }
        }
      ]
    );
  };

  render() {
    return [
      <FlatList
        key="flatlist"
        data={this.state.events}
        style={styles.list}
        keyExtractor={item => item.id}
        renderItem={({ item, separators }) => (
          <EventCard
            event={item}
            onPress={() => this.handleOnPress(item.id)}
            onLongPress={() => this.handleLongPress(item.id)}
          />
        )}
      />,
      <ActionButton
        key="fab"
        buttonColor="rgba(231,76,60,1)"
        onPress={this.handleAddEvent}
      />
    ];
  }
}

export default EventList;
