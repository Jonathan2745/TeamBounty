import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import BountyIconViewer from '../components/BountyIcon';
import { useNavigation } from "@react-navigation/native";

const BountyIcon = require('../assets/images/frierenbox.jpg');

export default function HomeScreen(){
    const navigation = useNavigation();
    return(
    <View style={styles.container}>
        <View style={ styles.bountyIconContainer }>
            <BountyIconViewer bountyIconSource={BountyIcon} />
        </View>

        <Text style={styles.title} > Home Screen </Text>
        
        <Pressable onPress={() => navigation.navigate("Email")}> <Text> Go to Email </Text> </Pressable>  
        <Pressable onPress={() => navigation.navigate("Jobs")}> <Text> Go to Jobs </Text> </Pressable>  
        <Pressable onPress={() => navigation.navigate("Signup")}> <Text> Go to Signup </Text> </Pressable>  
        <Pressable onPress={() => navigation.navigate("Notification")}> <Text> Go to Notifications </Text> </Pressable>  
        <Pressable onPress={() => navigation.navigate("Profile")}> <Text> Go to Profile </Text> </Pressable>  
        <Pressable onPress={() => navigation.navigate("Search")}> <Text> Go to Search </Text> </Pressable>  
        <Pressable onPress={() => navigation.navigate("Wallet")}> <Text> Go to Wallet </Text> </Pressable>  

    
    </View>
    );
}



const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        justifyContent: "center",
    },

    bountyIconContainer: {
        flex: 1,
        paddingTop: 3,
        alignItems: 'center',
    },


    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },

    Subtext: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },

});