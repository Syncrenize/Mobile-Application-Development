import { View, Text, Image, StyleSheet } from 'react-native';
// I added profile layout (image, name, course, bio) and applied styles - 04/26/2026
export default function App() {
  return (
<View style={styles.container}>
  
  <Image
  source={require('../../assets/profile.jpg')}
  style={styles.image}
/>

  <Text style={styles.name}>Fame Calonia</Text>
      <Text style={styles.course}>Multimedia Arts - CS126</Text>
      <Text style={styles.bio}>
        I create art and make entertainment
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  course: {
    fontSize: 18,
    marginVertical: 5,
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
