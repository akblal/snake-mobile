import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

import SelectGame from './SelectGame.jsx';

const GameScreen = ({ arrowDirection, toggleUpDown }) => {
  let [fontsLoaded] = useFonts({
    'PressStart2P': require('../../assets/fonts/PressStart2P-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return undefined
  }

  return (
    <View style= {styles.gameScreenContainer}>
      <SelectGame arrowDirection= {arrowDirection} toggleUpDown= {toggleUpDown}/>


    </View>
  );
};

const styles = StyleSheet.create({
  gameScreenContainer: {
    height: '85%',
    width: '85%',
    backgroundColor: 'teal',
    borderWidth: 5,
    borderColor: 'red',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth:3,
  },
});

export default GameScreen;
