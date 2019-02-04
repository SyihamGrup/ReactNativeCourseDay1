import { Platform } from "react-native";

export const BaseUrl = {
  events:
    Platform.OS === "android"
      ? "http://10.0.2.2:5000/events"
      : "http://localhost:5000/events"
};
