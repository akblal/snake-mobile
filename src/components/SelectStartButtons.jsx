import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SelectStartButtons = () => {
  return (
    <View style= {styles.startSelectContainer}>
      <View style= {styles.layoutContainer}>
        <View style= {styles.buttonsContainer}>
          <TouchableOpacity>
            <View style= {styles.longButtonTextContainer}>
              <View style= {styles.longButton}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style= {styles.longButtonTextContainer}>
              <View style= {styles.longButton}></View>
            </View>
          </TouchableOpacity>
        </View>

        <View style= {styles.buttonsContainer}>
          <View style= {styles.longButtonTextContainer}>
            <Text>Select</Text>
          </View>
          <View style= {styles.longButtonTextContainer}>
            <Text>Start</Text>
          </View>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  startSelectContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '60%',
  },
  layoutContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  longButtonTextContainer: {
    justifyContent: 'space-between',
    alignItems: 'space-between',
  },
  longButton: {
    width: 40,
    height: 15,
    backgroundColor: 'black',
    marginBottom: 5,
    borderRadius: 15,
  },

});

export default SelectStartButtons