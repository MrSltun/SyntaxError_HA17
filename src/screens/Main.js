import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import {Link} from 'react-router-native'
import Dimensions from 'Dimensions'
const width = Dimensions.get('window').width

export default class Main extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Image
            source={require('../img/home.jpg')}
            style={{flex: 1.8, resizeMode: 'contain', height: width / 3, width: width / 3}} />
          <View style={{flex: 1, justifyContent: 'space-around', padding: 120}}>
            <Button>
              <Link
                to="/camera">
              <Text>CAMERA</Text>
            </Link>
            </Button>
            <Button>
              <Text>Click Me!</Text>
            </Button>
            <Button>
              <Link
                to="/inv/item1">
                <Text>CLICK ME!</Text>
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
