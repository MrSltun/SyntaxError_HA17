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
import Map from './Map.js'
@inject('store') @observer
export default class Item extends Component {
  componentWillMount () {
    let id = this.props.id

    this.data = this.props.store.inventory.find((item) => {return item.imageItem === this.props.id })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.Header}>
          <Left>
            <Button transparent>
              <Link to="/Inventory">
                <Icon name='arrow-back' />
              </Link>
            </Button>
          </Left>
          <Right>
          <Body>
            <Title>{this.data.imageItem || 'غرض'}</Title>
          </Body>
          </Right>
        </Header>

        <View style={styles.view2}>
          <H2>{this.data.imageItem || 'غرض'}</H2>
          <Text>{'\n'}</Text>
          <Text>{this.data.description || 'شرح الغرض'}</Text>
          {this.data.elements.map((item, i) => {
            let color
            this.props.store.inv.indexOf(item) === -1 ? color = 'red' : color = 'lime'
            return <Text keyExtractor={item} style={{color: color, fontSize: 25}}>
              {' - ' + item}
            </Text>
          })}
        </View>

        <View style={styles.view3}>
          <View style={styles.button}>
            <Button block light>
              <Link to="/Map">
                <Text>تحديد الموقع</Text>
              </Link>
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
    backgroundColor: '#fafafa'
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
