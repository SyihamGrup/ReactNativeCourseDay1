import React, { Component } from "react";
import PropTypes from "prop-types";

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { formatDate, getCountdownParts } from "../utils/dateHelper";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    margin: 10,
    marginTop: 5,
    marginBottom: 5
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row"
  },
  date: {
    fontWeight: "200",
    fontSize: 15,
    color: "#bdbdbd",
    width: "30%",
    textAlign: "right"
  },
  title: {
    fontSize: 15,
    fontWeight: "300",
    marginLeft: 7,
    textAlign: "left"
  },
  counterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  counter: {
    width: "25%",
    flex: 1
  },
  counterText: {
    fontSize: 40,
    textAlign: "center",
  },
  counterLabel: {
    fontSize: 13,
    fontWeight: "100",
    color: "#a3a3a3",
    textAlign: "center",
    paddingTop: 0
  },

  counterTextEnded: {
    fontSize: 40,
    textAlign: "center",
    color: 'red'
  },

  counterTextToday: {
    fontSize: 40,
    textAlign: "center",
    color: 'orange'
  },

  endedEvent: {
    padding: 15
  },
  endedEventText: {
    fontSize: 30,
    color: 'crimson',
    textAlign: 'center',
  }
});

class EventCard extends Component {
  render() {
    const { event, onPress, onLongPress } = this.props;
    const { days, hours, minutes, seconds } = getCountdownParts(event.date);
    const date = new Date();
    const dayNow = date.getDate();

    function colorChanger () {
      if (days < dayNow ) {
          return styles.counterTextEnded
      } else if (days === dayNow) {
         return styles.counterTextToday
      } else {
        return styles.counterText
      }
    }

    const counterTextColor = colorChanger();

    return (
      <>
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>



          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.date}>{formatDate(event.date)}</Text>
              <Text style={styles.title}>{event.title}</Text>
            </View>
            {
              days >= dayNow
              ?
              <View style={styles.counterContainer}>
              <View style={styles.counter}>
                <Text style={counterTextColor}>{days}</Text>
                <Text style={styles.counterLabel}>DAYS</Text>
              </View>
              <View style={styles.counter}>
                <Text style={counterTextColor}>{hours}</Text>
                <Text style={styles.counterLabel}>HOURS</Text>
              </View>
              <View style={styles.counter}>
                <Text style={counterTextColor}>{minutes}</Text>
                <Text style={styles.counterLabel}>MINUTES</Text>
              </View>
              <View style={styles.counter}>
                <Text style={counterTextColor}>{seconds}</Text>
                <Text style={styles.counterLabel}>SECONDS</Text>
              </View>
            </View>
                :
                <View style={styles.endedEvent}>
                  <Text style={styles.endedEventText}>ENDED</Text>
                </View>
            }
          </View>
        </TouchableOpacity>
      </>
    );
  }
}

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date)
  }),
  onPress: PropTypes.func,
  onLongPress: PropTypes.func
};

export default EventCard;
