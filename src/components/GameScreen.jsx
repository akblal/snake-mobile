import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

import SnakeGame from './SnakeGame';

import SelectGame from './SelectGame.jsx';

const GameScreen = ({ arrowDirection, toggleUpDown, pressedA, pressedB, handleA, modalVisible, disableAButton }) => {

  const [chosenGame, setChosenGame] = useState('');

  let [fontsLoaded] = useFonts({
    'PressStart2P': require('../../assets/fonts/PressStart2P-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return undefined
  }

  const selectGame = (name) => {
    if (pressedA === 'AA') {
      setChosenGame(name);
    }
  }

  const backToHome = () => {
    setChosenGame('')
  }

  return (
    <View style= {styles.gameScreenContainer}>
      {chosenGame.length === 0 ?
        <SelectGame arrowDirection= {arrowDirection} toggleUpDown= {toggleUpDown} pressedA= {pressedA} pressedB= {pressedB} handleA= {handleA} selectGame= {selectGame} modalVisible= {modalVisible} disableAButton= {disableAButton}/> :
        null
      }
      {chosenGame.length ?
        <SnakeGame chosenGame= {chosenGame} backToHome={backToHome} pressedB= {pressedB}/> :
        null
      }

    </View>
  );
};

const styles = StyleSheet.create({
  gameScreenContainer: {
    height: '85%',
    width: '85%',
    backgroundColor: 'teal',
    // borderWidth: 5,
    // borderColor: 'red',
    alignItems: 'center',
    borderRadius: 10,

  },
});

export default GameScreen;
