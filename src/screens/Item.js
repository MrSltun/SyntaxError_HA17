/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Link } from 'react-router-native'

import {inject, observer} from 'mobx-react/native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';

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
            <Title>Items</Title>
          </Body>
        </Header>

<View style={styles.view1}>
<Image source={require('../img/home.jpg')} style={styles.img}   resizeMode="contain">
</Image>
</View>

<View style={styles.view2}>
<Text>this items is sooo coool you can use it now gg wep</Text>

</View>

        <View style={styles.view3}>
      <Button block light style={styles.Button}>
        <Text>Dark</Text>
      </Button>
      <Button block light style={styles.Button}>
        <Text>Dark</Text>
      </Button>
    </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
         flex: 1,
         flexDirection: 'column'

     },
     Button:{
flex: 1,
maxWidth: 100

     },
     view1:{
flex: 2,
alignItems: 'center'

     },
     view2:{
flex: 1,
alignItems: 'center',
paddingTop: 35

     },
     view3:{
flex: 0.5,
flexDirection: 'row',
justifyContent:'space-around',
paddingTop: 100



     },
     img:{

flex: 1,
borderRadius: 10,
paddingTop: 10



     },


});
