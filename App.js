import React from 'react';
import 'react-native-gesture-handler';
import { View, Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lab06Sreen1 from './screens/Lab06Sreen01.js';
import cart from './assets/Cart-Check--Streamline-Bootstrap.png'
import backarrow from './assets/Arrow-Left--Streamline-Carbon.png'
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chat"
      screenOptions={
        {
        headerStyle:{
          height:50,
          backgroundColor:'#1BA9FF',       
        },headerTitleAlign: 'center',
         headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={backarrow}  
                style={{ width: 30, height: 30, marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Image
              source={cart} 
              style={{ width: 30, height: 30, marginRight: 10 }}
            />
          ),
      }
      }>
        <Stack.Screen name="Chat" component={Lab06Sreen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;