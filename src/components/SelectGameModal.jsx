import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, Pressable, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';

const SelectGameModal = ({ modalVisible, handleModalVisible, handleA, game }) => {
  let [fontsLoaded] = useFonts({
    'PressStart2P': require('../../assets/fonts/PressStart2P-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return undefined
  }

  return (

        <View style= {styles.container}>
          <View style= {styles.modalContainer}>
            <View style= {styles.titleContainer}>
              <Text style= {styles.font}>{game.name}</Text>
            </View>
            <View style= {styles.gamePictureContainer}>
              <Text>picture</Text>
            </View>
            <View style= {styles.buttonRow}>
              <Pressable
                onPress={() => handleModalVisible('close')}>
                <Text style={styles.closeModal}>Play</Text>
              </Pressable>
              <Pressable
                onPress={() => handleModalVisible('close')}>
                <Text style={styles.closeModal}>Back</Text>
              </Pressable>
            </View>

          </View>
        </View>

  )
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // flex: 1,
    // borderWidth: 5,
    // borderColor: 'blue',
    zIndex: 2,
    width: 350,
    height: 800,
    position: 'absolute',
    top: -200,
    left: -16,

  },
  modalContainer: {
    backgroundColor: 'white',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    top: 100,
    borderRadius: 20,
    height: '40%',
    borderColor: 'pink',
    borderWidth: 3,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
    backgroundColor: 'pink',
    paddingTop: 10,
    paddingBottom: 8,
  },
  font: {
    fontFamily: 'PressStart2P',
  },
  closeModal: {

  },
  gamePictureContainer: {
    flex: 4,
    backgroundColor: '#8A2BE2',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  buttonRow: {
    flex: 0.5,
    backgroundColor: 'pink',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    flexDirection: 'row'
  },
});

export default SelectGameModal