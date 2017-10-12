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



<View>
<Header>
<Body>
<Title style={styles.title}>Main</Title>
</Body>
</Header>
</View>


               <View style={styles.boxOne}>


               <Image
                           source={require('../img/icon_t.png')}
                           style={{ resizeMode: 'contain', width: width / 2 , height: width / 2 }} />


                          <Text style={styles.text}>المستكشف الذكي</Text>




               </View>






         <View style={styles.boxTwo}>



         <Footer>
           <FooterTab style={styles.button}>
             <Button active>
               <Icon active name="apps" />
             </Button>
             <Button>
               <Icon name="camera" />
             </Button>
             <Button >
               <Icon  name="navigate" />
             </Button>

           </FooterTab>
         </Footer>

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
   backgroundColor: '#E0E0E0',
   justifyContent: 'center',
   alignItems: 'center',


 },


  boxTwo: {
   flex: 0.17,
   backgroundColor: 'red',


 },




button:{

alignSelf: 'center',
//marginBottom: 20
backgroundColor: '#2E7D32'



},
text:{

fontSize: 50,
fontWeight: 'bold',
color: '#2E7D32',
marginTop: 30



},
title:{

alignSelf: 'center'


}


}
