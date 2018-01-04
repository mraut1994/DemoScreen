import React,{ Component }  from 'react';
import { Text,View,Image,TouchableWithoutFeedback } from 'react-native';
import { Card,Divider } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';


class StolenCard extends Component {
  onRowPress(){
    console.log('onPress');
      Actions.LostOrStolenCard();
    }
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Select Card
        </Text>
        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
      <Card containerStyle={styles.cardStyle}
        onPress={this.onRowPress.bind(this)}>
        <View style={styles.imageContainerStyle}>
            <View style={styles.textColumnStyle}>
              <Text style={styles.textHeadingStyle}>Master Card</Text>
              <Text >Master 7001</Text>
            </View>
            <Image
              source={require('./images/right_arrow.png')}
            />
        </View>
      </Card>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
      <Card containerStyle={styles.card2Style}>
          <View style={styles.imageContainerStyle}>
              <View style={styles.textColumnStyle}>
                <Text style={styles.textHeadingStyle}>Platinum Visa</Text>
                <Text >VISA 0003</Text>
              </View>
              <Image
                source={require('./images/right_arrow.png')}
              />
          </View>
        </Card>
      </TouchableWithoutFeedback>
      </View>

    );
  }
}
const styles = {
  container:{
    backgroundColor:'#f9f9f9',
    flex:1
  },
  cardStyle:{
    height:70,
    borderColor:'#fff',
    borderWidth: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  card2Style:{
    height:70,
    marginTop:1,
    borderWidth: 0,
    borderColor:'#fff',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },

  textStyle:{
    marginTop:20,
    marginLeft:20
  },
  textColumnStyle:{
    alignItems:'flex-start',
    justifyContent:'space-between'
  },
  textHeadingStyle:{
    color:'#0d13c4'
  },
  imageContainerStyle:{
     flexDirection: 'row',
     justifyContent:'space-between',
     alignItems:'center'
  }

}
export default StolenCard;
