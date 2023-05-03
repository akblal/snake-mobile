import React, {useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';

const SnakeGame = ({ chosenGame, backToHome, pressedB }) => {

  useEffect(() => {
    if (pressedB === 'B') {
      backToHome()
    }
  }, [pressedB])

  return (
    <View>
      <Text>Welcome to {chosenGame}</Text>
      <Text>{pressedB}</Text>
    </View>

  )
}

export default SnakeGame