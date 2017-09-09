import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {ListItem, Line, TabBarIcon} from '../component/base';

class Discovery extends Component{
  static navigationOptions = ({ navigation }) => ({
    title: '发现',
    tabBarLabel: '发现',
    tabBarIcon: <TabBarIcon icon={require('../img/discovery.png')}/>
  });

  constructor(props){
    super(props);
  }

  _onPress = (route, params) => () => {
    this.props.navigation.navigate(route, params);
  };

  render(){
    return (
      <View>
        <ListItem title='排行榜' onPress={this._onPress('1')}/>
        <Line />
        <ListItem title='主题书单' onPress={this._onPress('2')}/>
        <Line/>
        <ListItem title='分类' onPress={this._onPress('3')}/>
        <Line/>
      </View>
    )
  }
}

export default Discovery;