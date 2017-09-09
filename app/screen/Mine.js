import React, { Component } from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
import {TabBarIcon} from '../component/base';

class Mine extends Component{
  static navigationOptions = ({ navigation }) => ({
    title: '我的',
    tabBarLabel: '我的',
    tabBarIcon: <TabBarIcon icon={require('../img/mine.png')}/>
  });

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View>
        <Text>detail</Text>
      </View>
    )
  }
}

export default Mine;