/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';
import {inject, observer} from 'mobx-react/native'
import { Container, Header, Content, Left, Right, Icon, Title, Button, List, ListItem, Thumbnail, Text, Body } from 'native-base';

@inject('store') @observer
export default class Inventory extends Component {
  render() {
    return (
      <View>

      <Header>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Items</Title>
        </Body>
        <Right>

        </Right>
      </Header>

          <List  style={styles.list}>
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
          </List>



</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list:{

   justifyContent: 'center',
   width: 400,
   paddingTop: 30

 },
 body: {

   margin: 5



 }

});
