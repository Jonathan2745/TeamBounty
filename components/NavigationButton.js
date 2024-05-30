import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function NavigationButton({ theme }){
    const navigation = useNavigation();
    if (theme === "Home"){
        return(
            <View style={styles.Buttoncontainer}> 
                <Pressable style={styles.button} onPress={ () => navigation.navigate("Home")}/>
            </View>
        );
    } else if (theme === "Profile"){
        return(
            <View style={styles.Buttoncontainer}> 
                <Pressable style={styles.button} onPress={ () => navigation.navigate("Profile")}/>
            </View>
        );

    } else if ( theme === "Wallet"){
        return(
            <View style={styles.Buttoncontainer}> 
                <Pressable style={styles.button} onPress={ () => navigation.navigate("Wallet")}/>
            </View>
        );

    } else if ( theme === "Notifications"){
        return(
            <View style={styles.Buttoncontainer}> 
                <Pressable style={styles.button} onPress={ () => navigation.navigate("Notifications")}/>
            </View>
        );

    } else if ( theme === "Search"){
        return(
            <View style={styles.Buttoncontainer}> 
                <Pressable style={styles.button} onPress={ () => navigation.navigate("Search")}/>
            </View>
        );
    } else {
        return <View style={styles.Buttoncontainer}>
            <Text style={styles.errortext}> Sum ting wong </Text>
        </View>
    }
}


const styles = StyleSheet.create({
    Buttoncontainer: {
        width: 50,
        height: 50,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    errortext: {
        fontSize: 50,

    },

});