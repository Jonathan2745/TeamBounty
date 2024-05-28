import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView ,View } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";


const EmailInput = () => {
    const [text, onChangeText] = useState('');
        return (
            <SafeAreaView >
                <TextInput inputMode={"email"} style={styles.input} placeholder='Email' onChangeText={newText => setText(newText)} defaultValue={text} />
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

    }
);