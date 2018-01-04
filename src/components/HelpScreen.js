import React,{ Component }  from 'react';
import { Text,View,Image,TouchableWithoutFeedback } from 'react-native';
import { Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import {  CardSection } from './common';

// <Image
//   width={200}
//   height={267}
//   source={{uri: 'right_arrow'}}
//   style={styles.localImageStyle}
// />
// {type: 'reset'}
class HelpScreen extends Component {

  onRowPress(){
      console.log('onPress');
      Actions.StolenCard();
  }
  onDirectCallPress(){
      // Actions.MainCard({type: 'reset'});
      Actions.DirectCall();
  }
  onAccessibleClick(){
      // Actions.MainCard({type: 'reset'});
      Actions.Web();
  }
  onLocateClick(){
      // Actions.MainCard({type: 'reset'});
      Actions.LocateWeb();
  }

  render() {
    return(
      <View style={{backgroundColor:'#f9f9f9',flex:1}}>

        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
          <Card containerStyle={styles.containerStyle}>
            <View style={styles.imageContainerStyle}>
               <Text style={styles.textStyle}>
                 Report a lost or stolen card
              </Text>
              <Image
              source={require('./images/right_arrow.png')}
              />
            </View>
          </Card>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.onLocateClick.bind(this)}>
          <Card containerStyle={{height:120,borderRadius: 5,borderWidth: 0,borderColor:'#fff',shadowRadius: 0}}>
              <View style={{justifyContent:'space-between'}}>
              <View style={styles.imageContainerStyle}>
                <Text style={styles.textStyle}>
                  Find a branch or cash machine
                </Text>
                <Image
                source={require('./images/right_arrow.png')}
                />
            </View>
          </View>
        </Card>
        </TouchableWithoutFeedback>

       <TouchableWithoutFeedback onPress={this.onAccessibleClick.bind(this)}>
          <Card containerStyle={styles.cardAccessibleStyle}>
            <View style={styles.imageAccessibleStyle}>
              <View>
                <Text style={styles.textAccessibleStyle}>
                  Accessible services
                </Text>
                  <Text>
                    We are committed to providing services that are accessible for everyone.
                  </Text>
                </View>
                <Image
                 source={require('./images/right_arrow.png')}
                />
              </View>
            </Card>
        </TouchableWithoutFeedback>

            <Card containerStyle={styles.callCard}>
              <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <View style={{justifyContent:'center'}}>
                  <View style={styles.circleShapeView}>
                    <Image
                      source={require('./images/call.png')}
                       />
                  </View>
                  <Text style={{alignSelf:'center'}}>
                    FAQs
                  </Text>
                </View>
                <View>
                  <TouchableWithoutFeedback onPress={this.onDirectCallPress.bind(this)}>
                  <View style={styles.circleShapeView}>
                    <Image
                      source={require('./images/call.png')}
                    />
                  </View>
                  </TouchableWithoutFeedback>
                  <Text style={{alignSelf:'center'}}>
                    Direct call
                  </Text>
                </View>
              </View>
        </Card>
    </View>
    );
  }
}
const styles = {
  imageStyle:{
      justifyContent:'center',
      alignItems:'center',

  },
  circleShapeView: {
     width: 60,
     height:60,
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center',
     borderRadius: 70/2,
     backgroundColor: '#007aff'
},
  callCard:{
     flex:1,
     shadowOffset: {width: 0, height:0},
     shadowRadius: 0,
     marginBottom:5,
     borderRadius: 5,
     shadowOpacity: 0,
     borderWidth: 0,
     borderColor:'#fff'
  },
  textStyle: {
     color:'#0d13c4',
     fontSize:16
  },
  containerStyle:{
    shadowRadius: 0,
     height:60,
     borderRadius: 5,
     shadowOpacity: 0,
     borderWidth: 0,
     shadowOffset: {width: 0, height:0},
     borderColor:'#fff'
  },
  imageContainerStyle:{
     flexDirection: 'row',
     justifyContent:'space-between',
     alignItems:'center'
  },
  imageAccessibleStyle:{
     flexDirection:'row',
     justifyContent:'space-around',
     alignItems:'center',
     margin:2
  },
  localImageStyle:{
     height:10,
     width:10,
     paddingTop:15,
  },
  textAccessibleStyle:{
     marginBottom:15,
     color:'#0d13c4',
     fontSize:16
  },
  cardAccessibleStyle:{
    shadowRadius: 0,
    shadowOpacity: 0,
    shadowOffset: {width: 0, height:0},
     alignItems:'center',
     borderRadius: 5,
     borderWidth: 0,
     borderColor:'#fff',
     flex:1
  }
}
export default HelpScreen;
