import {
 View, Image, StatusBar, TouchableWithoutFeedback
} from 'react-native';
import React, { Component } from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';

class NavBar extends Component {
  render() {
    return (
<View style={styles.backgroundStyle}>
      <StatusBar />
      <View style={{ flexDirection: 'row' }}>
      <TouchableWithoutFeedback onPress={() => Actions.homeScreen()}>
      <Image
    source={require('../images/back.png')}
    style={styles.backarrowStyle} />
      </TouchableWithoutFeedback>

      <Image
  source={require('../images/right_arrow.png')}
  style={styles.helpStyle} />


  <Image
source={require('../images/call.png')}
style={styles.settingStyle} />
    </View>
</View>
    );
  }

}
const styles = {
  backgroundStyle: {
    backgroundColor: 'transparent'
  },
  backarrowStyle: {
    resizeMode: 'contain',
    flexDirection: 'row',
    width: 50,
    height: 50,
    left: 0,
    justifyContent: 'flex-start'
  },
  helpStyle: {
    resizeMode: 'contain',
      width: 50,
      height: 50,
      left: 220,
      justifyContent: 'flex-end',
      position: 'relative'

  },
  settingStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    justifyContent: 'flex-end',
  position: 'relative',
  left: 210
  }
};


export default NavBar;
