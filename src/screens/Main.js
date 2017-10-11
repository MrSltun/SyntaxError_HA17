import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import { Container, Header, Content, Button, Text, Body, Title, Left, Icon, Right, Footer, FooterTab} from 'native-base';
import {Link} from 'react-router-native'
import axios from 'axios'
const { width } = Dimensions.get('window')

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>



               <View style={styles.boxOne}>

               <Image
                           source={require('../img/icon.png')}
                           style={{ resizeMode: 'contain', width: width / 2 , height: width / 2 }} />

               </View>





         <View style={styles.boxTwo}>




         <Button rounded style={styles.button}>
           <Text>Start Scanning</Text>
         </Button>

         <Button rounded style={styles.button}>
           <Text>Inventory</Text>
         </Button>

         </View>






      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,


  },


  boxcontainerOne: {
    flex: 1,
    flexDirection: 'column'



  },

  boxOne: {
   flex: 2,
   backgroundColor: '#fafafa',
   justifyContent: 'center',
   alignItems: 'center',


 },


  boxTwo: {
   flex: 1,
   backgroundColor: '#fafafa',
   alignItems: 'center',
   justifyContent: 'center',

 },




button:{

alignSelf: 'center',
marginBottom: 20



},


}
