import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, Pressable, SafeAreaView, Image } from 'react-native';
import { useFonts } from 'expo-font';

const SelectGameModal = ({ modalVisible, handleModalVisible, handleA, game }) => {

  const [imgSource, setIMGSource] = useState('')

  let [fontsLoaded] = useFonts({
    'PressStart2P': require('../../assets/fonts/PressStart2P-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return undefined
  }
  // useEffect(() => {
  //   if (game.name === 'Snake') {
  //     setIMGSource('../../assets/images/gameCover/Snake.jpeg')
  //   }
  // },[])

  return (

        <View style= {styles.container}>
          <View style= {styles.modalContainer}>
            <View style= {styles.titleContainer}>
              <Text style= {styles.font}>{game.name} {game.id}</Text>
            </View>
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
              />
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
    zIndex: 2,
    width: 350,
    height: 800,
    position: 'absolute',
    top: -200,
    left: -23,

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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
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