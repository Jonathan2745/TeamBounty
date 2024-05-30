import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button } from "react-native";


import BountyIconViewer from '../components/BountyIcon';
import EmailLoginButton from '../components/EmailLoginButton';
import { useNavigation } from '@react-navigation/native';

const BountyIcon = require('../assets/images/frierenbox.jpg');
const Title = "NUSBounty";


export default function SignupScreen() {
  return (
      <View style={styles.container}>
      <Text style={styles.title}> NUSBounty </Text>
        
      <View style={ styles.bountyIconContainer }>
        <BountyIconViewer bountyIconSource={BountyIcon} />
      </View>
      
      <Text style={styles.header}> Create an Account </Text>
      <Text style={styles.subheader}> Enter your NUSNet email to sign up for this app </Text>
       
      <View style={styles.loginContainer}>
        <EmailLoginButton theme="primary" label="NUS SSO Login" destination="Email" />
      </View>


      <Text style={styles.subheader}> Not a NUS Student or Staff ? </Text>

      <View style={styles.loginContainer}>
        <EmailLoginButton theme="secondary" label="Log in with Google" />
      </View>
      
      <Text style={styles.subtext} > By clicking continue, you agree to our Terms of Service and Privacy Policy </Text>

      

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    title: {
      paddingTop: 80,
      fontSize: 48,
      fontFamily: 'Tahoma',
      fontWeight: 'bold',
    }, 
  
    header: { 
      padding: 0,
      fontSize: 24,
      fontFamily: 'Taholma',
      fontWeight: 'bold',
    },
  
    subheader: {
      padding: 0,
      fontSize: 20,
      fontFamily: 'Taholma',
    },
  
    subtext: {
      paddingTop: 3,
      fontSize: 12,
      fontFamily: 'Taholma',
    },  
  
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    bountyIconContainer: {
      flex: 1,
      paddingTop: 3,
      alignItems: 'center',
    },
  
    loginContainer: {
        flex: 1,
        paddingTop: 5,
        alignItems: 'center',
    },
  
});



