import React,{ Component }  from 'react';
import { BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Router from './Router';

class App extends Component {
 //  constructor (props) {
 //   super(props)
 // }
 // componentDidMount () {
 //    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid()) // Listen for the hardware back button on Android to be pressed
 //  }
 //  componentWillUnmount () {
 //   BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) // Remove listener
 // }
 // backAndroid () {
 //  //  if (Actions.state.index === 0) {
 //  //      return false;
 //  //    }
 //  //   Actions.pop() // Return to previous screen
 //    return true // Needed so BackHandler knows that you are overriding the default action and that it should not close the app
 //  }


  render() {
    return(
      // <Provider store ={createStore(reducers)}>
      // <View>
        <Router />
      // </View>
      // </Provider>
    );
  }
}


export default App;
