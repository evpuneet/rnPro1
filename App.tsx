import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View, //it is almost like div not exactly the div
} from 'react-native';

function App(){
  return(
    <SafeAreaView>
      <View>
        <Text>Hello world!</Text>
        <Text>This is my first Day</Text>
        <Text>of writting my</Text>
        <Text>React Navtive Code</Text>
        <Button title='Click'/>
      </View>
    </SafeAreaView>
  );
}


export default App;