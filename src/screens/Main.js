import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';


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
              <Text>Click Me! </Text>
            </Button>
            <Button style={styles.button}>
              <Text >Click Me! </Text>
            </Button>
            <Button style={styles.button}>
              <Text >Click Me! </Text>
            </Button>
          </View>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center'




  },
  button:{
  marginBottom: 10,
  width: 150,
  justifyContent: 'center',




},
containerImg:{


alignSelf: 'center',
marginBottom: -200,
marginTop: 150



},


});
