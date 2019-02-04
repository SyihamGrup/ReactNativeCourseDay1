import { createStackNavigator, createAppContainer } from "react-navigation";

import EventList from "./src/components/EventList";
import EventForm from "./src/components/EventForm";
import EditEventForm from "./src/components/EditEventForm";

const MainNavigator = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: "Your Events",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "dodgerblue"
      }
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: "Add an Event",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "dodgerblue"
      }
    })
  },
  editForm: {
    screen: EditEventForm,
    navigationOptions: () => ({
      title: "Edit Event",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "dodgerblue"
      }
    })
  }
});

const App = createAppContainer(MainNavigator);

export default App;
