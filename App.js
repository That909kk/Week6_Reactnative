import React from 'react';
import 'react-native-gesture-handler';
import { View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Lab06Sreen1 from './screens/Lab06Sreen01.js';
import Lab06Sreen2 from './screens/Lab06Sreen02.js';
import cart from './assets/Cart-Check--Streamline-Bootstrap.png'
import backarrow from './assets/Arrow-Left--Streamline-Carbon.png'
import { TextInput } from 'react-native-gesture-handler';
const Stack = createStackNavigator();
const App = () => {
  /* Running Screen1 */
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="Chat"
  //     screenOptions={
  //       {
  //       headerStyle:{
  //         height:50,
  //         backgroundColor:'#1BA9FF',       
  //       },headerTitleAlign: 'center',
  //        headerLeft: () => (
  //           <TouchableOpacity onPress={() => navigation.goBack()}>
  //             <Image
  //               source={backarrow}  
  //               style={{ width: 30, height: 30, marginLeft: 10 }}
  //             />
  //           </TouchableOpacity>
  //         ),
  //         headerRight: () => (
  //           <Image
  //             source={cart} 
  //             style={{ width: 30, height: 30, marginRight: 10 }}
  //           />
  //         ),
  //     }
  //     }>
  //       <Stack.Screen name="Chat" component={Lab06Sreen1} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
  /* Running Screen2 */
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search"
        screenOptions={
          {
            headerStyle: {
              height: 50,
              backgroundColor: '#1BA9FF',
            }, headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={backarrow}
                  style={{ width: 30, height: 30, marginLeft: 10 }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{
                flexDirection: 'row',

              }}
              >
                <Image
                  source={cart}
                  style={{
                    width: 30, height: 30,
                    marginRight: 50,
                    marginBottom: 5,
                  }}
                />
                <View style={{
                  width: 17,
                  height: 17,
                  backgroundColor: 'red',
                  borderRadius: 50,
                  position: 'absolute',
                  top: -5,
                  right: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 10,
                  color: 'white',
                  fontWeight: 'bold',
                  padding: 2,
                  margin: 2,

                }}>

                </View>
                <Image source={require('./assets/Three-Dots--Streamline-Bootstrap.png')}
                  style={{
                    width: 18,
                    height: 18,
                    position: 'absolute',
                    top: 5,
                    right: 5,
                  }}
                />
              </View>

            ),
            headerTitle: () => (
              <View
                style={{
                  width: 192,
                  height: 30,
                  backgroundColor: 'white',
                  paddingBottom: 5,
                  marginBottom: 8,
                  flexDirection: 'row',
                }}
              >
                <Image source={require('./assets/Search--Streamline-Carbon.png')}
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 5,
                    marginTop: 3,
                  }}
                ></Image>
                <TextInput
                  placeholder="Dây cáp USB"
                />
              </View>
            ),
          }
        }>
        <Stack.Screen name="Search" component={Lab06Sreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;