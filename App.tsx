import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#fff"
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "#fff",
    color: "#fff",
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please enter a Google Maps URL</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
      />
      <Button
        // onPress={onPressLearnMore}
        title="Generate GPX"
        color="#32a852"
      />
    </View>
  );
}
