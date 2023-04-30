import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

import SnakeGame from './SnakeGame';

import SelectGame from './SelectGame.jsx';

const GameScreen = ({ arrowDirection, toggleUpDown, pressedA, pressedB, handleA, modalVisible }) => {

  const [chosenGame, setChosenGame] = useState('');
  // const [modalVisible, setModalVisible] = useState(false);

  // useEffect(() => {
  //   if(pressedA.length === 1) {
  //     setModalVisible(true)
  //   } else{
  //     setModalVisible(false)
  //   }
  // }, [pressedA])

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

  return (
    <View style= {styles.gameScreenContainer}>
      <SelectGame arrowDirection= {arrowDirection} toggleUpDown= {toggleUpDown} pressedA= {pressedA} pressedB= {pressedB} handleA= {handleA} selectGame= {selectGame} modalVisible= {modalVisible}/>

    </View>
  );
};

// {chosenGame === ''?
//   <SelectGame arrowDirection= {arrowDirection} toggleUpDown= {toggleUpDown} pressedA= {pressedA} pressedB= {pressedB} handleA= {handleA} selectGame= {selectGame}/> :
//   <SnakeGame chosenGame= {chosenGame}/>
// }

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
