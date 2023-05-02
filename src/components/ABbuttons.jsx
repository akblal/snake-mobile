import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ABbuttons = ({ handleA, handleB, disableA }) => {
  return (
    <View style= {styles.ABButtonContainer}>
      <View style={styles.bButtonContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress= {() => handleB('B')}>
          <Text style={styles.buttonText}>B</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.aButtonContainer}>
        <TouchableOpacity style={styles.buttonStyle} disabled= {disableA} onPress= {() => handleA('A')}>
          <Text style={styles.buttonText} >A</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ABButtonContainer: {
    height: '100%',
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  aButtonContainer: {
    position: 'absolute',
    top: 35,
    right: 0,
  },
  bButtonContainer: {
    position: 'absolute',
    top: 50,
    left: 10,
  },
  buttonStyle: {
    width: 50,
    height: 50,
    backgroundColor: '#2B2B2B',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ABbuttons