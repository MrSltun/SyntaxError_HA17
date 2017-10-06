/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {inject, observer} from 'mobx-react/native'
import { Link } from 'react-router-native'


@inject('store') @observer
export default class Inventory extends Component {
  render() {
    let test, test2
    test = this.props.about
    test2= this.props.topic
    return (
      <View style={styles.container}>
        <Text>I'm the Inventory component</Text>
        <Text>{this.props.store.example.data}</Text>
        <View style={{height: 250, width: 50}}>
          <Link
            to="/"
            underlayColor='#f0f4f7'>
            <Text>Home</Text>
          </Link>
          <Link
            to="/about"
            underlayColor='#f0f4f7'>
            <Text>About</Text>
          </Link>
          <Link
            to="/topics"
            underlayColor='#f0f4f7'>
            <Text>Topics</Text>
          </Link>
        </View>
        <Text>{test}</Text>
        <Text>{test2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
