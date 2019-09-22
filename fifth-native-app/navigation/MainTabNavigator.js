import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import RoutineScreen from '../screens/RoutineScreen';
import TimerScreen from '../screens/TimerScreen';

const config = Platform.select({
  web: { headerMode: 'screen', },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const RoutineStack = createStackNavigator(
  {
    Links: RoutineScreen
  },
  config
);

RoutineStack.navigationOptions = {
  tabBarLabel: "Routine",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon style={{ display: "none" }} focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

RoutineStack.path = '';

const TimerStack = createStackNavigator(
  {
    Links: TimerScreen  
  },
  config
)

TimerStack.navigationOptions = {
  tabBarLabel: "Timer", 
  tabBarIcon: ({ focused }) => (
    <TabBarIcon style={{ display: "none"}} focused={focused} name={Platform.OS === 'ios' ? 'ios-link': 'md-link'} /> 
  ),
}

TimerStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  RoutineStack,
  TimerStack
});

tabNavigator.path = '';

export default tabNavigator;
