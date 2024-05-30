import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import EmailInput from '../components/EmailInput';

export default function EmailScreen(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Email Screen </Text>
            <EmailInput/>
            <Button title="Sign up" onPress={() => navigation.navigate("Profile")} />
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