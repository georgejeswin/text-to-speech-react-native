import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Speech from 'expo-speech'

export default function App() {
  const [words,setWords]=useState('hello');
  const handlePress=()=> {
    Speech.speak(words);
  }
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      placeholder='Write something..'
      onChangeText={text=>setWords(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Click to say....</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'grey',
    paddingHorizontal:15,
    paddingVertical:12,
    borderRadius:10,
    marginTop:20
  },
  buttonText:{
    color:'white'
  },
  input:{
    borderWidth:1,
    borderColor:'gray',
    borderRadius:10,
    paddingHorizontal:15,
    paddingVertical:12,
    width:225,


  }
});
