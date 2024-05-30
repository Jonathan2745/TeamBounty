import { StyleSheet, Image, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';


const GoogleIcon = require('../assets/icons/icon_google.png');
const NUSIcon = require('../assets/icons/icon_nus.png');



export default function EmailLoginButton({ label, theme}) {
  const navigation = useNavigation();
  if ( theme === "primary" ){ 
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, { backgroundColor: "#25292e" }]}
          onPress={() => navigation.navigate("Email")}
        >
          <Image style={styles.tinylogo} source={NUSIcon}/>

          <Text style={[styles.buttonLabel, { color: "#fff" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  } else if ( theme === "secondary"){
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, { backgroundColor: "#D3D3D3" }]}
          onPress={() => alert('Signup Feature not implememented yet')}
        >
        <Image style={styles.tinylogo} source={GoogleIcon}/>

          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
      </View>
    );

  }

return (
  <View style={styles.buttonContainer}>
    <Pressable style={styles.button} onPress={() => alert('Signup Feature not implemented yet!')}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  </View>
);
}



const styles = StyleSheet.create({
  tinylogo: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },

  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },

  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  buttonIcon: {
    paddingRight: 8,
  },

  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
