import { StyleSheet, Image, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const GoogleIcon = require('../assets/icons/icon_google.png');
const NUSIcon = require('../assets/icons/icon_nus.png');


export default function EmailLoginButton({ label, theme }) {
  if ( theme === "primary" ){
    return (
      <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#25292e" }]}
          onPress={() => alert('Login Feature not implememented yet')}
        >
          <Image style={styles.tinylogo} source={NUSIcon}/>

          <Text style={[styles.buttonLabel, { color: "#fff" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  } else if ( theme === "secondary"){
    return (
      <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => alert('Login Feature not implememented yet')}
        >
        <Image style={styles.tinylogo} source={GoogleIcon}/>

          {/* <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          /> */}
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
      </View>
    );

  }

return (
  <View style={styles.buttonContainer}>
    <Pressable style={styles.button} onPress={() => alert('Login Feature not implemented yet!')}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  </View>
);
}



const styles = StyleSheet.create({
  tinylogo: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },

  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },

  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  buttonIcon: {
    paddingRight: 8,
  },

  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
