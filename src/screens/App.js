/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'mobx-react/native'
import { StyleProvider } from 'native-base'
import { NativeRouter, Route, Link, AndroidBackButton } from 'react-router-native'

import store from './../config/Mobx'
import getTheme from '../../native-base-theme/components';
import Main from './Main'
import Item from './Item'
import Inventory from './Inventory'
import Camera from './Camera'
import Map from './Map'

/*
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link
          to="/"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>Home</Text>
        </Link>
        <Link
          to="/about"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>About</Text>
        </Link>
        <Link
          to="/topics"
          underlayColor='#f0f4f7'
          style={styles.navItem} >
            <Text>Topics</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </View>
  </NativeRouter>

<Provider store={Store}>
  <Main />
</Provider>

*/

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme()}>
        <NativeRouter>
          <AndroidBackButton>
          <View style={{flex: 1}}>
          <Route exact path="/" component={(context) => <Main context={context} />}/>

          <Route exact path="/Inventory" component={(context) => <Inventory context={context} />}/>
          <Route path="/Item" component={(context) => <Item context={context} />}/>
          <Route path="/Map" component={(context) => <Map context={context} />}/>

          <Route path='/Inventory/:id' component={({match, location, history}) => <Item history={history} id={match.params.id}/>} />
          <Route path='/Camera' component={() => <Camera />}/>
        </View>
      </AndroidBackButton>
      </NativeRouter>
      </StyleProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
