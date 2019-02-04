import { createStackNavigator, createAppContainer } from "react-navigation";

import EventList from "./EventList";
import EventForm from "./EventForm";

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
  }
});

const App = createAppContainer(MainNavigator);

export default App;
