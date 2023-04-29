import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, Pressable, SafeAreaView, Image } from 'react-native';

const ProgressBar = () => {

  const [width, setWidth] = useState(60);


  // const loading = () => {
  //   let num = width;
  //   num += 10;
  //   setWidth(num);
  // }

  // while (width < 100) {
  //   setTimeout(loading(), 100)
  // }


  return (

    <View >
      <Text> Progress Bar </Text>
      <View style= {[styles.done]}>
        <View style= {[styles.hi, {width: width}]}>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({

  done: {
    display: 'flex',
    height: 10,
    transition: '1s, ease 0.3sec',
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
  },
  hi: {
    display: 'flex',
    borderColor: 'yellow',
    borderWidth: 1,
    width: 30,
    height: 10
  }
});

export default ProgressBar