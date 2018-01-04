import React,{ Component }  from 'react';
import { Text,View,Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import {RoundedButton} from './common';

class DirectCall extends Component {
  render() {
    return(
      <View style={{backgroundColor:'#f9f9f9',flex:1}}>
        <Card containerStyle={{borderColor:'#fff'}}>
          <View style={{flexDirection:'column',justifyContent:'space-between'}}>
            <View  style={{flexDirection:'column',justifyContent:'space-between',marginBottom:10}}>
              <Text style={{marginBottom:10,fontSize:16}}>
                Master Card
              </Text>
              <Text>
                MASTER 7001
              </Text>
            </View>
            <View style={{ alignSelf:'center'}}>
              <RoundedButton>
                Direct call
              </RoundedButton>
            </View>
          </View>
        </Card>
        <Card containerStyle={{borderColor:'#fff'}}>
          <View style={{flexDirection:'column',justifyContent:'space-between'}}>
            <View  style={{flexDirection:'column',justifyContent:'space-between',marginBottom:10}}>
              <Text style={{marginBottom:10,fontSize:16}}>
                Platinum Visa
              </Text>
              <Text>
                VISA 0003
              </Text>
            </View>
            <View style={{ alignSelf:'center'}}>
              <RoundedButton>
                Direct call
              </RoundedButton>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

export default DirectCall;
