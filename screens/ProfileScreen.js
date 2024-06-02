import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, Pressable, SafeAreaView } from "react-native";



export default function ProfileScreen(){
    const navigation = useNavigation();
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}> Profile Screen </Text>
            <Button title="Logout" onPress={() => navigation.navigate("Login")} />
            <Button title="Return to Home" onPress={() => navigation.navigate("Home")} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});