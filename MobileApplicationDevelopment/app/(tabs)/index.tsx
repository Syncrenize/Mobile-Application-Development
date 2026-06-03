import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button } from 'react-native';
export default function Index() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  // Custom greeting script - 05/01/2026
  const myName = 'Fame';

  const greet = (name: string) => {
    return `Hey ${name}, welcome to my app!`;
  };

  const classmates = ['Kiergee', 'Patreece', 'Shannyn', 'Andee', 'Trigie'];
  console.log(classmates.map((name) => greet(name)));

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile.jpg')}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.counter}>Count: {count}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="+"
          onPress={() => setCount(count + 1)}
        />

        <Button
          title="-"
          onPress={() => setCount(count - 1)}
        />

        <Button
          title="Reset"
          onPress={() => setCount(0)}
        />
      </View>

{count > 0 ? (
  <Text>You are counting up! 🚀</Text>
) : count < 0 ? (
  <Text>Negative numbers! 📉</Text>
) : (
  <Text>Counter is reset. 🔄</Text>
)}

      <Text style={styles.name}>{name || 'Enter Your Name'}</Text>
      <Text style={styles.course}>Multimedia Arts - CS126</Text>
      <Text style={styles.bio}>I create art and make entertainment</Text>
    </View>
  );
}
// I added profile layout (image, name, course, bio) and applied styles - 04/26/2026p
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
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  counter: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
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
