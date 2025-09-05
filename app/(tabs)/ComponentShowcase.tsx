import { Image, Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'; // Added Text import
import React, { useState } from 'react';


export default function HomeScreen() {


  return (
    <View style={styles.mainContainer}>
      <View>
          <Image
            source={require('@/assets/images/Spotify.png')}
            style={styles.spotimg}
          />
      </View>

      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
      />

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
        />

        <TextInput
           style={styles.input}
           placeholder="Password"
           placeholderTextColor="#aaa"
         />

         <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#aaa"
          />
      </View>

      <View>
          <TouchableOpacity style={styles.greenButton} onPress={() => console.log('Login pressed')}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
  },
  spotimg: {
    width: 250,
    height: 200,
    marginBottom: 140,
    marginTop: 110
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: '#000',
    marginTop: 10,
  },
    inputContainer: {
    marginBottom: 10,
  }
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  greenButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: 'center',
    width: 300,
  },


});
