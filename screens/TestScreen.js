import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView
} from 'react-native';
import { generateClient } from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';

// retrieves only the current value of 'user' from 'useAuthenticator'


export default function test(){
    return (
    <SafeAreaView style={styles.container}>
        <Text> test screen </Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: { width: 400, flex: 1, padding: 20, alignSelf: 'center' },
  todo: { marginBottom: 15 },
  input: {
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18
  },

  buttonText: { color: 'white', padding: 16, fontSize: 18 }
});