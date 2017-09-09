import React, { Component } from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
import {TabBarIcon, BookItem, Line} from '../component/base';

import {search} from '../api/api';

class Home extends Component{
  static navigationOptions = ({ navigation }) => ({
    title: '主页',
    tabBarLabel: '主页',
    tabBarIcon: <TabBarIcon icon={require('../img/home.png')}/>
  });

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this._search('宰执天下');
  }

  _search = async (query) => {
    let res = await search(query)
    console.log(res)
  };

  _onPress = () => {
    console.log('onpress')
    this._search('good')
  };

  render(){
    return (
      <View>
        <BookItem onPress={this._onPress}/>
        <Line/>
        <BookItem onPress={this._onPress}/>
        <Line/>
        <BookItem onPress={this._onPress}/>
        <Line/>
        <BookItem onPress={this._onPress}/>
        <Line/>
      </View>
    )
  }
}

export default Home;