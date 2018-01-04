import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Scene, Router,Actions,Reducer } from 'react-native-router-flux';
import HelpScreen from './components/HelpScreen';
import StolenCard from './components/StolenCard';
import LostOrStolenCard from './components/LostOrStolenCard';
import DirectCall from './components/DirectCall';
import MyWebView from './components/MyWebView';
import LocateWebView from './components/LocateWebView';
import NavBar from './components/common/NavBar';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};


onBackPress = () => {
  // if (Actions.state.index === 0) {
  //   return false
  // }
  Actions.pop()
  return true
}
  // backAndroidHandler={onBackPress}

  // <Scene key="helpScreen">
  //   <Scene
  //       key="Help"
  //       component={HelpScreen}
  //       title="Help"
  //       titleStyle={{alignSelf:'flex-start',paddingRight:20,color:'#ffffff'}}
  //       navigationBarStyle={styles.navBarStyle}
  //       />
  //   </Scene>
const RouterComponent = () => {

    return(
      <Router
        sceneStyle={{ paddingTop: 65 }}
        createReducer={reducerCreate}
        >
        <Scene key="MainCard">
          <Scene
              key="Help"
              component={HelpScreen}
              title="Help"
              titleStyle={{alignSelf:'flex-start',paddingRight:100,color:'#ffffff'}}
              navigationBarStyle={styles.navBarStyle}
              initial
              />
          <Scene
              key="StolenCard"
              component={StolenCard}
              onLeft={() => Actions.helpScreen({type: 'reset'}) }
              leftButtonImage={require('./components/images/back.png')}
              leftButtonIconStyle={styles.leftButtonImageStyle}
              titleStyle={[styles.titleTextStyle,{marginLeft:40}]}
              title="Lost or stolen card"
              navigationBarStyle={styles.navBarStyle}

          />
          <Scene
              key="LostOrStolenCard"
              component={LostOrStolenCard}
              onLeft={() => Actions.StolenCard({type: 'reset'}) }
              leftButtonImage={require('./components/images/back.png')}
              leftButtonIconStyle={styles.leftButtonImageStyle}
              titleStyle={[styles.titleTextStyle,{marginLeft:40}]}
              title="Lost or stolen card"
              navigationBarStyle={styles.navBarStyle}
          />
          <Scene
              key="DirectCall"
              title="Direct Call"
              component={DirectCall}
              onLeft={() => Actions.helpScreen({type: 'reset'})}
              leftButtonImage={require('./components/images/back.png')}
              leftButtonIconStyle={styles.leftButtonImageStyle}
              titleStyle={[styles.titleTextStyle,{marginLeft:10}]}
              navigationBarStyle={styles.navBarStyle}
              back
          />
         <Scene
              key="Web"
              title="Accessibility"
              component={MyWebView}
              navigationBarStyle={styles.navBarStyle}
              leftButtonIconStyle={styles.leftButtonImageStyle}
              titleStyle={[styles.titleTextStyle,{marginLeft:20}]}
              onLeft={() => Actions.helpScreen({type: 'reset'})}
              leftButtonImage={require('./components/images/back.png')}
         />
          <Scene
               key="LocateWeb"
               title="Locate"
               component={LocateWebView}
               navigationBarStyle={styles.navBarStyle}
               titleStyle={styles.titleTextStyle}
               leftButtonIconStyle={styles.leftButtonImageStyle}
               onLeft={() => Actions.helpScreen({type: 'reset'})}
               leftButtonImage={require('./components/images/back.png')}
           />
      </Scene>
  </Router>
    );
};

const styles = {
  titleTextStyle: {
    color:'#ffffff',
    alignSelf:'flex-start'
    // marginLeft:30
  },
  navBarStyle: {
    backgroundColor:'#0d13c4',
  },
  leftButtonImageStyle:{
    height:26,
    width:42,
    alignItems:'center',
    justifyContent:'center',
    // paddingRight:20
  }
}

export default RouterComponent;
