import { createStackNavigator, createAppContainer } from "react-navigation";
import EventList from './EventList';
import EventForm from './EventForm';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

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
