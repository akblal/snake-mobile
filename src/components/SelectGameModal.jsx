import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, Pressable, SafeAreaView, Image } from 'react-native';
import { useFonts } from 'expo-font';

import ProgressBar from './ProgressBar.jsx';

const SelectGameModal = ({ modalVisible, handleModalVisible, handleA, game, pressedA }) => {


  let [fontsLoaded] = useFonts({
    'PressStart2P': require('../../assets/fonts/PressStart2P-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return undefined
  }

  return (

        <View style= {styles.container}>
          <View style= {styles.modalContainer}>
            <View style= {styles.gamePictureContainer}>
              <Image
                style= {styles.image}
                source= {
                          game.name === 'Snake' ? require('../../assets/images/gameCover/Snake.jpeg') :
                          game.name === 'Tetris' ? require('../../assets/images/gameCover/Tetris.jpeg') :
                          game.name === 'Bomberman' ? require('../../assets/images/gameCover/Bomberman.jpeg') :
                          game.name === 'Pokemon Red' ? require('../../assets/images/gameCover/PokemonRed.jpeg') :
                          game.name === 'Metroid II' ? require('../../assets/images/gameCover/MetroidII.png') :
                          game.name === 'Super Mario Bros' ? require('../../assets/images/gameCover/SuperMarioBros.jpeg') :
                          require('../../assets/images/gameCover/Zelda.jpeg')
                        }
               resizeMode= 'contain'
              />
            </View>
            <View style= {styles.progressBarContainer}>
              <ProgressBar />
            </View>
            <View style= {styles.buttonRow}>
              <View>
                <Text style={styles.closeModal}>Play</Text>
              </View>
              <View>
                <Text style={styles.closeModal}>Back</Text>
              </View>
            </View>

          </View>
        </View>

  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    width: 350,
    height: 800,
    position: 'absolute',
    top: -200,
    left: -23,

  },
  modalContainer: {
    backgroundColor: 'pink',
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
  progressBarContainer: {
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
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    marginTop: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 40,
    overflow: 'hidden',
  },
  buttonRow: {
    flex: 0.5,
    backgroundColor: 'pink',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    flexDirection: 'row',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default SelectGameModal