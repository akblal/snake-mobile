import React from 'react';
import { View, StyleSheet } from 'react-native';

import ArrowButtons from './ArrowButtons.jsx';
import ABbuttons from './ABbuttons.jsx';
import SelectStartButtons from './SelectStartButtons.jsx';

const GameScreen = () => {
  return (
    <View style= {styles.gameScreenContainer}>

      <View style= {styles.physicalScreenContainer}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameScreenContainer: {
    height: '85%',
    width: '85%',
    backgroundColor: 'teal',
    borderWidth: 5,
    borderColor: 'teal',
    alignItems: 'center',
    borderRadius: 5,
  },

});

export default GameScreen;
