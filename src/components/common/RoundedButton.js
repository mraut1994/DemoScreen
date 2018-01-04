import React from'react';
import {Text, TouchableOpacity } from 'react-native';


const RoundedButton = ( { onPress, children, props }) => {
const { buttonStyle, textStyle } = styles;
return(
<TouchableOpacity
  onPress={onPress}
  style={buttonStyle}>
      <Text style={ textStyle }>
        {children}
      </Text>
</TouchableOpacity>
  );
};

const styles= {
textStyle:{
  alignSelf: 'center',
  color:'#007aff',
  fontSize: 16,
  fontWeight: '600',
  paddingTop: 10,
  paddingBottom: 10
},
  buttonStyle: {
    // flex:1,
    height:40,
    width:290,
    alignSelf: 'stretch',
    backgroundColor:'#fff',
    borderRadius: 20 ,
    borderColor: '#007aff',
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5
  }
}

export { RoundedButton };
