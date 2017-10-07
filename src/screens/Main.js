import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Link} from 'react-router-native'
const { width } = Dimensions.get('window')

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerImg}>
          <Image
            source={require('../img/home.jpg')}
            style={{ width: width / 3 , height: width / 3 }} />
        </View>
        <View style={{...styles.container, justifyContent: 'center'}}>
          <Button style={styles.button}>
            <Link to="/Inventory">
              <Text>Inventory</Text>
            </Link>
          </Button>
          <Button style={styles.button} info>
            <Link to="/Item">
              <Text>Item</Text>
            </Link>
          </Button>
          <Button style={styles.button}>
            <Link to="/Map">
              <Text>map</Text>
            </Link>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FAFAFA'
  },

  button:{
    margin: 7,
    width: 150,
    justifyContent: 'center'
    },

  containerImg:{
    flex: 1.3,
    alignSelf: 'center',
    justifyContent: 'center'
  }
}
