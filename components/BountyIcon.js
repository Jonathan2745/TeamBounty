import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ bountyIconSource }){
  return (
    <Image source={bountyIconSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 236,
    borderRadius: 18,
  },
});
