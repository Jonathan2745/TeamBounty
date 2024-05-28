import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ProfileScreen({ navigation }){
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Profile Screen </Text>
            <Button title="Logout" onPress={() => navigation.navigate("Login")} />
        </View>
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