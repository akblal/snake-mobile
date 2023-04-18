import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

import GameController from './src/components/GameController.jsx';

export default function App() {

  const [direction, setDirection] = useState();

  const handleDirection = (path) => {
    setDirection(path)
  }

  return (
    <SafeAreaView style= {styles.container}>
      <View style= {styles.gameContainer}>
        <Text>{direction}</Text>
      </View>
      <View style= {styles.controllerContainer}>
        <GameController handleDirection= {handleDirection}/>
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
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },

  controllerContainer: {
    flex: 3,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  }

});
