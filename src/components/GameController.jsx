import React from 'react';
import { View, StyleSheet } from 'react-native';

import ArrowButtons from './ArrowButtons.jsx';
import ABbuttons from './ABbuttons.jsx';
import SelectStartButtons from './SelectStartButtons.jsx';

const GameController = ({ handleDirection, handleA, handleB, modalVisible, disableA }) => {
  return (
    <View style= {styles.gamePadController}>

      <View style= {styles.arrowABController}>
        <ArrowButtons handleDirection= {handleDirection} modalVisible={modalVisible}/>
        <ABbuttons handleA= {handleA} handleB= {handleB} disableA= {disableA}/>
      </View>

      <SelectStartButtons />

    </View>
  );
};

const styles = StyleSheet.create({
  gamePadController: {
    flexDirection:  'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  arrowABController: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
  },
});

export default GameController;
