
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Screen extends Component {
  constructor (props) {
    super(props)

    this.takePicture = this.takePicture.bind(this)
  }

  componentDidMount () {
    setInterval(() => this.takePicture(), 5000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {this.camera = cam}}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill} />
      </View>
    );
  }

  takePicture() {
    const options = {};
    // options.location = navigator.geolocation.getCurrentPosition()
    this.camera.capture({metadata: options, target: Camera.constants.CaptureTarget.memory})
      .then((res) => console.log(res.data))
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
    margin: 40
  }
});
