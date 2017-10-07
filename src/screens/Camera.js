
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ToastAndroid
} from 'react-native';
import axios from 'axios';
import Camera from 'react-native-camera';
import { Icon } from 'native-base'
import { Link } from 'react-router-native'
import {inject, observer} from 'mobx-react/native'

@inject('store') @observer
export default class Screen extends Component {
  constructor (props) {
    super(props)

    this._toast = this._toast.bind(this)
    this.takePicture = this.takePicture.bind(this)
  }

  componentDidMount () {
    this._interval = setInterval(() => this.takePicture(), 5000)
  }

  componentWillUnmount () {
    clearInterval(this._interval)
  }

  _toast (text) {
    ToastAndroid.show(`تم التعرف على: ${text}`, ToastAndroid.SHORT)
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {this.camera = cam}}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Link to='/'>
            <Icon name='ios-arrow-back' style={styles.capture} />
          </Link>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    // options.location = navigator.geolocation.getCurrentPosition()
    this.camera.capture({metadata: options, target: Camera.constants.CaptureTarget.memory})
      .then((res) => {
        axios.post('http://192.168.7.241:3000/api/images', {image: res.data})
        .then (res => {
          response = res.data
          this._toast(response.imageItem)
          this.props.store.addToInv(response)
        })
        .catch(err => console.log(err))
      })
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    alignItems: 'stretch'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
    width: 30
  }
});
