/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Link } from 'react-router-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, H2 } from 'native-base';
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
        <Header style={styles.Header}>
          <Left>
            <Button transparent>
              <Link to="/">
                <Icon name='arrow-back' />
              </Link>
            </Button>
          </Left>
          <Body>
            <Title>Item Title</Title>
          </Body>
        </Header>

        <View style={styles.view2}>
          <H2>Item Title</H2>
          <Text>this items is sooo coool you can use it now gg wep</Text>
        </View>

        <View style={styles.view3}>
          <View style={styles.button}>
            <Button block light>
              <Text>Dark</Text>
            </Button>
        </View>
        <View style={styles.button}>
          <Button block light>
            <Text>Dark</Text>
          </Button>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#E8F5E9'
  },
  button: {
    flex: 1,
    maxWidth: 100
  },
  view1: {
    flex: 2,
    alignItems: 'center'
  },
  view2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around'
  }
});
