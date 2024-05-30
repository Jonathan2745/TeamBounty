import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from "./screens/ProfileScreen";
import EmailScreen from "./screens/EmailScreen";
import HomeScreen from './screens/HomeScreen';
import JobScreen from './screens/JobsScreen';
import NotificationScreen from './screens/NotificationScreen';
import WalletScreen from './screens/WalletScreen';
import SearchScreen from './screens/SearchScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Email" component={EmailScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Jobs" component={JobScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

