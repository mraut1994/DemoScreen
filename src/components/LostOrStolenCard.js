import React,{ Component }  from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import { Button } from './common';



class LostOrStolenCard extends Component {
  showAlert(){
    Alert.alert(
      'Call setting',
      'Are you sure ? You want to make a call',
  [
    // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
    )
  }
  render() {
    return(
      <View style={styles.container}>

        <View style={styles.containerStyle}>
          <Image
            source={require('./images/retry.png')}
            style={styles.imageStyle}
             />
           <Text style={{marginTop:10,fontSize:20}}>Please call us </Text>
             <Text >
               We'll need to check some details before
             </Text>
             <Text style={{marginBottom:10}}>
              sending a replacement card.
             </Text>
             <Text>
               You will go directly through to the lost and
               {'\n'}
               {'                        '}stolen team.
             </Text>
        </View>
        <View style={styles.container1}>
          <View
            style={{
              borderBottomColor: '#aeb0b2',
              borderBottomWidth: 1,
              marginBottom:10
             }}
         />
       <View style={{alignSelf:'center'}}>
         <Button onPress={this.showAlert.bind(this)}>
           Call us
         </Button>
       </View>
        </View>
      </View>
    );
  }
}
styles ={
  imageStyle:{
    height:70,
    width:70
  },
  containerStyle:{
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:40,
  },
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between',
    backgroundColor:'#f9f9f9'
  },
  container1:{
    backgroundColor:'#f9f9f9',
    // marginTop:200,
    marginBottom:10
  },


}

export default LostOrStolenCard;
