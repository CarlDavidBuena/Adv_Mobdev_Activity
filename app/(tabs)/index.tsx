import { Image, Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'; // Added Text import
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {


  return (
    <View style={styles.mainContainer}>
      <View>
          <Image
            source={require('@/assets/images/Spotify.png')}
            style={styles.spotimg}
          />
      </View>

      <View>
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
      </View>

      <View style={styles.forgotContainer}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => console.log('Login pressed')}>
          <LinearGradient
            colors={['#000000', 'green']} // black to green
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientButton}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </LinearGradient>
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
  forgotContainer: {
      width: 300,
      alignItems: 'flex-end',
      backgroundColor: '#000',
      paddingVertical: 10,
  },
  forgotText: {
    color: 'grey',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

  gradientButton: {
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    width: 300,
  },


});
