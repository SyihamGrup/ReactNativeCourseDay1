import { createStackNavigator, createAppContainer } from "react-navigation";

import EventList from "./components/EventList";
import EventForm from "./components/EventForm";
import EditEventForm from "./components/EditEventForm";

const MainNavigator = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: "Your events"
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: "Add an event"
    })
  },
  editForm: {
    screen: EditEventForm,
    navigationOptions: () => ({
      title: "Edit event"
    })
  }
});

const App = createAppContainer(MainNavigator);

export default App;
