import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Home, Discovery, Mine } from './screen'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      refresh: true,
    }
  }

  render(){
    return (
      <Navigator>

      </Navigator>
    )
  }
}

const Tab = TabNavigator(
  {
    Home: {
      screen: Home,
    },
    Discovery: {
      screen: Discovery,
    },
    Mine: {
      screen: Mine,
    }
  },
  {
    tabBarComponent: TabBarBottom,
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
      style: {
        height: 40,
      },
    }
  }
);

const Navigator = StackNavigator(
  {
    Tab: {
      screen: Tab,
    },
  },
  {
    navigationOptions: {
      headerTitleStyle: {alignSelf: 'center'},
      headerBackTitle: null,
      headerTintColor: '#333333',
      showIcon: true,
    },
  }
);