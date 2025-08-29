import { Image } from 'expo-image';
import { Platform, StyleSheet, ScrollView, Text, Button, Modal, View} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';

export default function TabThreeScreen () {
    const [modalVisible, setModalVisible] = useState(false);

    return (
            <ParallaxScrollView
                headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
                headerImage={
                    <Image
                     source = {require('@/assets/images/v915-techi-025-l.png')}
                     style = {styles.newBackground}
                    />
                }
            >

            <ScrollView style = {styles.scrollView}>
                <Text style={styles.textdesign}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit dui, interdum id orci at, ultrices vestibulum nisi. Phasellus scelerisque iaculis tincidunt. Aliquam eget elit nulla. Ut gravida tortor sit amet accumsan dapibus. Donec scelerisque, quam at faucibus rhoncus, felis sem mollis urna, vel ultrices neque ex non dui. Praesent sagittis enim nec scelerisque egestas. Fusce a sapien scelerisque lorem pellentesque tempor. Cras consequat commodo ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur lacinia finibus pharetra. Nulla eget tempus enim. Suspendisse potenti.</Text>
                <Button title="Random Button" onPress={() => setModalVisible(true) } />
            </ScrollView>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text>Hello from the dialog box!</Text>
                  <Button title="Close" onPress={() => setModalVisible(false)} />
                </View>
              </View>
            </Modal>

            </ParallaxScrollView>
        );



}


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
    textdesign: {
    color: 'black',
    fontSize: 30,
    padding: 10,
  },
  scrollstyle: {
    backgroundColor: 'pink',
  },
  newBackground: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },

});