import { Platform } from "react-native";
import { API_URL, LOCAL_HOST_DROID, LOCAL_HOST_IOS } from "react-native-dotenv";

export const BaseUrl = {
  events:
    Platform.OS === "android"
      ? __DEV__
        ? LOCAL_HOST_DROID
        : API_URL
      : __DEV__
      ? LOCAL_HOST_IOS
      : API_URL
};
