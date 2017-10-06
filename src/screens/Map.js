/* @flow */
import MapView from 'react-native-maps';

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Header, Left, Body, Icon, Title, Button} from 'native-base';
import { Link } from 'react-router-native'

export default class Map extends Component {
  render() {
    const { region } = this.props;
    console.log(region);

    return (
         <View style ={styles.container}>

         <Header>
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


           <MapView
             style={styles.map}
             region={{
               latitude: 37.78825,
               longitude: -122.4324,
               latitudeDelta: 0.015,
               longitudeDelta: 0.0121,
             }}
           >

           <MapView.Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}>
           </MapView.Marker>


           </MapView>

           <View style={styles.view3}>
         <Button block light style={styles.Button}>
           <Text>Dark</Text>
         </Button>

       <Button block light style={styles.Button}>
       <Link to="/">

         <Text>menu</Text>

         </Link>
       </Button>

       </View>
         </View>


       );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  view3:{
flex: 0.5,
flexDirection: 'row',
justifyContent:'space-around',
paddingTop: 2000



  },
  Button:{
flex: 1,
maxWidth: 100

  },

});
