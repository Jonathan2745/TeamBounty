import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";

export default function NotificationScreen(){
    const navigation = useNavigation();
    return(
    <View style={styles.container}>
        <Text style={styles.title} > Notifications Screen </Text>
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