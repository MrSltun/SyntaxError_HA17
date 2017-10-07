
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';


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
      .then((res) => {
/*        fetch('https://requestb.in/q2dbadq2', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: res.data,
            sup: 'PUTA',
          })
        })
        .catch((error) => {console.error(error)});*/
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
    margin: 40
  }
});
