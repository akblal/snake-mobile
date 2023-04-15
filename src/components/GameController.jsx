import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

const GameController = ({ handleDirection }) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity= {1}
        onPress= {() => handleDirection('up')}
        style= {styles.upButton}
      >
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity= {1}
        style= {styles.downButton}
        onPress= {() => handleDirection('down')}
      ></TouchableOpacity>
      <TouchableOpacity
        activeOpacity= {1}
        style= {styles.leftButton}
        onPress= {() => handleDirection('left')}
      ></TouchableOpacity>
      <TouchableOpacity
        activeOpacity= {1}
        style= {styles.rightButton}
        onPress= {() => handleDirection('right')}
      ></TouchableOpacity>

      <View style= {styles.centerRectangle}></View>


      <TouchableOpacity
        style= {[styles.triangle, styles.up]}
        activeOpacity= {1}
        onPress= {() => handleDirection('up')}
      ></TouchableOpacity>
      <TouchableOpacity
        activeOpacity= {1}
        style= {[styles.triangle, styles.left]}
        onPress= {() => handleDirection('left')}
      ></TouchableOpacity>
      <TouchableOpacity
        activeOpacity= {1}
        style= {[styles.triangle, styles.down]}
        onPress= {() => handleDirection('down')}
      ></TouchableOpacity>
      <TouchableOpacity
        activeOpacity= {1}
        style= {[styles.triangle, styles.right]}
        onPress= {() => handleDirection('right')}
      ></TouchableOpacity>

    </View>
  )
}

export default GameController;

const styles = StyleSheet.create({
  upButton: {
    height: 80,
    width: 60,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: 'black',
    position: 'absolute',
    top: -100,
    left: -28,
    zIndex: 1,
  },

  downButton: {
    height: 80,
    width: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    left: -28,
    zIndex: 1,
  },

  leftButton: {
    height: 60,
    width: 80,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: 'black',
    position: 'absolute',
    top: -30,
    left: -105,
    zIndex: 1,
  },

  rightButton: {
    height: 60,
    width: 80,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'black',
    position: 'absolute',
    top: -30,
    left: 30,
    zIndex: 1,
  },

  centerRectangle: {
    height: 60,
    width: 58,
    backgroundColor: 'black',
    position: 'absolute',
    top: -30,
    left: -27,
  },


  triangle: {
    width: 0,
    height: 0,
    // backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 40,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "lightblue",
    position: 'absolute',
    zIndex: 2,
  },

  up: {
    top: -90,
    left: -18,
  },

  down: {
    transform: [{rotate: '180deg'}],
    top: 50,
    left: -18,
  },

  left: {
    transform: [{rotate: '270deg'}],
    top: -20,
    left: -100,
  },

  right: {
    transform: [{rotate: '90deg'}],
    top: -20,
    left: 60,
  },
});
{/* <View style= {[styles.triangle, styles.up]}></View>
<View style= {[styles.triangle, styles.down]}></View>
<View style= {[styles.triangle, styles.left]}></View>
<View style= {[styles.triangle, styles.right]}></View> */}