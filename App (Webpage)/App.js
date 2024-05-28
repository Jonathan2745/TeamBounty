import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import EmailScreen from "./screens/EmailScreen";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component ={ProfileScreen}/>
        <Stack.Screen name="Email" component={EmailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

