/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  FlatList
} from 'react-native';
import { Link } from 'react-router-native'
import { Container, Header, Content, Left, Right, Icon, Title, Button, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import {inject, observer} from 'mobx-react/native'


@inject('store') @observer
export default class Inventory extends Component {
  constructor (props) {
    super(props)
    this._renderItem = this._renderItem.bind(this)
  }

  _renderItem ({ item }) {
    return (
      <ListItem style={styles.body}>
        <Body>
          <Link to={`/Inventory/${item.id}`}>
            <Text>{item.name}</Text>
          </Link>
        </Body>
      </ListItem>
    )
  }

/*
<FlatList
  style={{alignSelf: 'stretch'}}
  data={this.props.store.inventory}
  removeClippedSubviews={false}
  keyExtractor={item => item.key}
  renderItem= {this._renderItem}/>
*/

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Link to="/">
                <Icon name='arrow-back' />
              </Link>
            </Button>
          </Left>
          <Body>
            <Title>Inventory</Title>
          </Body>
        </Header>

          <List style={styles.list}>
            <ListItem style={styles.body}>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>

            <ListItem style={styles.body}>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>

            <ListItem button style={styles.body}>
              <Body>
                <Link to={`/`}>
                <Text>Sankhadeep</Text>
              </Link>
              </Body>
            </ListItem>

            <ListItem style={styles.body}>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>

          </List>
        </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9'
  },
  list: {
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 10
  },
  body: {
    marginLeft: 0
  }
}
