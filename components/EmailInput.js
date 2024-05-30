import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView ,View } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';




export default function EmailInput() {
    const [text, onChangeText] = useState('');
    return(
        <SafeAreaView >
            <TextInput inputMode={"email"} style={[styles.input, { borderWidth: 4, borderColor: "#25292e", borderRadius: 0 } ]} placeholder='Email' onChangeText={newText => setText(newText)} defaultValue={text} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 18,
        fontSize: 20,
        fontFamily: "Cochin",
        color: "#25292e",
    },
});