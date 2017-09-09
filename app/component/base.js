import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export const ListItem = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.listItem}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
};

export const Line = () => {
  return (
    <View style={style.line}/>
  )
};

export const TabBarIcon = ({tintColor, focused, icon}) => {
  return (
    <View style={style.tabBarIcon}>
      <Image source={icon} />
    </View>
  )
};

export const BookItem = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.listItem}>
      <Image source={require('../img/cover.jpg')} style={style.book}/>
      <View style={style.cell}>
        <Text>宰执天下</Text>
        <Text>6小时前更新</Text>
      </View>
    </TouchableOpacity>
  )
};

const style = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 10,
  },

  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#c7d0d5'
  },

  book: {
    height: 50,
    width: 30,
  },

  cell: {
    marginLeft: 5,
  }
});