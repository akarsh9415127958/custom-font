import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';


export default class App extends React.Component {
state={
  fontsLoaded:true,
} ;
async loadFonts(){
  await Font.loadAsync({
    dancing: require('./assets/fonts/dancing.ttf'),

    'dancing2':{
      uri: require('./assets/fonts/dancing2.ttf'),
      display: Font.FontDisplay.FALLBACK,
    },
  });
  this.setState({fontsLoaded:true});
}

componentDidMount(){
  this.loadFonts();
}
render(){
  if(this.state.fontsLoaded){
    return(
      <View style = {styles.container}>
      <Text style = {{fontSize:25}}>Default font</Text>
      <Text style = {{fontFamily:'dancing',fontSize:27}}>Dancing1</Text>
      <Text style = {{fontFamily:'dancing2',fontSize:30}}>Dancing2</Text>
      
      </View>
    )
  }else{
    return null;
  }
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
