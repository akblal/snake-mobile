import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ArrowButtons = ({ handleDirection }) => {
  return (
    <View style={styles.arrowPadContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress= {() => {handleDirection('up')}}>
          <MaterialIcons name="keyboard-arrow-up" size={50} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress= {() => {handleDirection('left')}}>
          <MaterialIcons name="keyboard-arrow-left" size={50} color="white" />
        </TouchableOpacity>
        <View style={styles.centerButtonContainer}>
          <View style={styles.centerButton}></View>
        </View>
        <TouchableOpacity style={styles.button} onPress= {() => {handleDirection('right')}}>
          <MaterialIcons name="keyboard-arrow-right" size={50} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress= {() => {handleDirection('down')}}>
          <MaterialIcons name="keyboard-arrow-down" size={50} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  arrowPadContainer: {
    alignItems: 'center',
    zIndex: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#2B2B2B',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButtonContainer: {
    // marginHorizontal: 10,
  },
  centerButton: {
    width: 50,
    height: 50,
    backgroundColor: '#2B2B2B',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'inset',
  },
});

export default ArrowButtons