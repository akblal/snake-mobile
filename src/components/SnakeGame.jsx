import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const SnakeGame = ({ chosenGame }) => {
  return (
    <Text>We are playing {chosenGame}</Text>
  )
}

export default SnakeGame