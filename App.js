import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

import GameController from './src/components/GameController.jsx';
import GameScreen from './src/components/GameScreen.jsx';

export default function App() {

  const [arrowDirection, setArrowDirection] = useState();
  const [toggleUpDown, setToggleUpDown] = useState(true);
  const [pressedA, setPressedA] = useState('');
  const [pressedB, setPressedB] = useState('');

  const handleDirection = (direction) => {
    setArrowDirection(direction)
    if (direction === 'up' || direction === 'down') {
      setToggleUpDown(!toggleUpDown)
    }
  }

  const handleA = (button) => {
    if (button === 'A') {
      setPressedA('A');
    } else {
      setPressedA();
    }
    setPressedB('');

  }

  const handleB = (button) => {
    if (button === 'B') {
      setPressedB('B');
    } else {
      setPressedB();
    }
    setPressedA('');

  }

  return (
    <SafeAreaView style= {styles.container}>
      <View style= {styles.gameContainer}>
        <View style= {styles.powerButton}></View>
        <GameScreen arrowDirection= {arrowDirection} toggleUpDown= {toggleUpDown} pressedA= {pressedA} pressedB= {pressedB} handleA= {handleA}/>
      </View>
      <View style= {styles.controllerContainer}>
        <GameController handleDirection= {handleDirection} handleA= {handleA} handleB = {handleB}/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    margin: 20,
  },

  gameContainer: {
    flex: 5,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },

  controllerContainer: {
    flex: 3,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#002426',
    borderWidth: 3,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  powerButton: {
    backgroundColor: 'red',
    height: 15,
    width: 15,
    borderRadius: '50%',
    position: 'absolute',
    top: 50,
    left: 5,
  }

});
