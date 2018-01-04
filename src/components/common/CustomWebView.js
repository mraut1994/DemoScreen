import React, { Component } from 'react';
import { WebView } from 'react-native';

class CustomWebView extends Component {
  render() {
    return (
      <WebView
        source={{uri: this.props.uri}}
        style={{marginTop: 20}}
      />
    );
  }
}
export { CustomWebView };
