import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Link} from 'react-router-native'
import Inventory from './Inventory.js'
import Item from './Item.js'
import map from './Map'
export default class Main extends Component {
  render() {
    return (
      <Container>

    <View style={styles.containerImg}>
    <Image
          source={require('../img/home.jpg')}
          style={{width: 100, height: 100}}

        />
        </View>

          <View style={styles.container}>
          <Button style={styles.button}>
  <Link to="/Inventory">
                <Text>Inventory</Text>
            </Link>
              </Button>

            <Button style={styles.button}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
