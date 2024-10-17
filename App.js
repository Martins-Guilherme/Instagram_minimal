import React, {Component} from 'react'
import { View, Text, Image } from 'react-native'

class App extends Component{
  render(){
    let nome = 'Guilherme'
    let img = './assets/image/logo.png'

    return(
      <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
        <Image
          source={require(img)}
          style={{width: 200, height: 200}}
        />
        <Text style={{fontSize: 30}}>Olá mundo, {nome}</Text>
      </View>
    )
  }
}


export default App;