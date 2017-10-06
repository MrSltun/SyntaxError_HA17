/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {inject, observer} from 'mobx-react/native'

@inject('store') @observer
export default class Inventory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Inventory component</Text>
        <Text>{this.props.store.example.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
