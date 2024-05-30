import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";

export default function JobScreen(){
   const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.title} > Job Screen </Text>
            <Pressable onPress={() => navigation.navigate("Home")}>
                <Text> Return to Home </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {

    },

    Subtext: {

    },

});