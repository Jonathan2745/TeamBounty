import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";

export default function SearchScreen(){
    const navigation = useNavigation();
    return(
    <View style={styles.container}>
        <Text style={styles.title} > Search Screen </Text>
        <Pressable onPress={() => navigation.navigate("Home")} >
            <Text> Return To Home </Text>
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