import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, Pressable, SafeAreaView, Image } from 'react-native';
import { useFonts } from 'expo-font';

import ProgressBar from './ProgressBar.jsx';

const SelectGameModal = ({ modalVisible, handleModalVisible, handleA, game, pressedA, disableAButton }) => {

  const [failEndPercent, setFailEndPercent] = useState(Math.floor(Math.random()*21) + 5);
  const [playable, setPlayable] = useState(false);

  let [fontsLoaded] = useFonts({
    'PressStart2P': require('../../assets/fonts/PressStart2P-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return undefined
  }

  const getProgress = (percentage) =>{
    if (percentage === 100) {
      setPlayable(true);
      disableAButton(false);

    } else {
      disableAButton(true)
    }
    if (!game.available) {
      disableAButton(true)
    }
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
              <ProgressBar game= {game} failEndPercent= {failEndPercent} getProgress= {getProgress}/>
            </View>
            <View style= {styles.buttonRow}>
              <View style= {styles.formatButtonText}>
                <View style={playable ? styles.buttonStyle : [styles.buttonStyle, styles.notPlayable]}>
                  <Text style={styles.buttonText} >A</Text>
                </View>
                <Text style={playable ? [styles.font, styles.smallFont]: [styles.notPlayable, styles.font, styles.smallFont]}>Play</Text>
              </View>
              <View style= {styles.formatButtonText}>
                <View style={styles.buttonStyle}>
                  <Text style={styles.buttonText} >B</Text>
                </View>
                <Text style= {[styles.font, styles.smallFont]}>Back</Text>
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
  notPlayable: {
    color: 'lightgrey',
    opacity: 0.25,
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
  formatButtonText: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'space-evenly',
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: '10%',
    backgroundColor: 'green',
  },
  buttonStyle: {
    width: 25,
    height: 25,
    backgroundColor: '#2B2B2B',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  smallFont: {
    fontSize: 10,
  }
});

export default SelectGameModal