import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

const GameScreen = () => {
  let [fontsLoaded] = useFonts({
    'PressStart2P': require('../../assets/fonts/PressStart2P-Regular.ttf'),
    'Rubik': require('../../assets/fonts/RubikPixels-Regular.ttf')
  })

  if (!fontsLoaded) {
    return undefined
  }

  return (
    <View style= {styles.gameScreenContainer}>
      <Text style= {styles.title}>
        Welcome to GameMan
      </Text>
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
    borderRadius: 10,
  },
  title : {
    fontFamily: 'PressStart2P',
    color: 'blue'
  },

});

export default GameScreen;
