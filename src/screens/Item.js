/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {inject, observer} from 'mobx-react/native'

@inject('store') @observer
export default class Item extends Component {
  componentWillMount () {
    let id = this.props.id

    this.data = this.props.store.items[id]
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Im the Item component</Text>
        <Text>{this.data.title}</Text>
        <Text>{this.data.desc}</Text>
        <Text>{JSON.stringify(this.data.geo)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
