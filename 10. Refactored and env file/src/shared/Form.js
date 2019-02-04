import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
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
    backgroundColor: "#1e90ff",
    borderColor: "#1e90ff",
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

const Form = ({
  onChangeText,
  editable,
  onFocus,
  isVisible,
  title,
  pickedDate,
  onConfirm,
  onCancel,
  onPress,
  textButton
}) => {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.text}
          onChangeText={onChangeText}
          placeholder="Event title"
          spellCheck={false}
          value={title}
        />
        <TextInput
          style={[styles.text, styles.borderTop]}
          placeholder="Event date"
          spellCheck={false}
          editable={editable}
          onFocus={onFocus}
          value={pickedDate}
        />
        <DateTimePicker
          isVisible={isVisible}
          mode="datetime"
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </View>

      <TouchableHighlight onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{textButton}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Form;
