import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SelectStartButtons = () => {
  return (
    <View style= {styles.startSelectContainer}>
      <View style= {styles.layoutContainer}>
        <View style= {styles.buttonsContainer}>
          <View style= {styles.buttonTextLayout}>
            <TouchableOpacity>
              <View style= {styles.longButtonTextContainer}>
                <View style= {styles.longButton}></View>
              </View>
            </TouchableOpacity>
            <Text>Select</Text>
          </View>
          <View style= {styles.buttonTextLayout}>
            <TouchableOpacity>
              <View style= {styles.longButtonTextContainer}>
                <View style= {styles.longButton}></View>
              </View>
            </TouchableOpacity>
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
  buttonTextLayout: {
    alignItems: 'center',
  },
  longButtonTextContainer: {
    justifyContent: 'space-between',
    alignItems: 'space-between',
  },
  longButton: {
    width: 40,
    height: 15,
    backgroundColor: '#2B2B2B',
    marginBottom: 5,
    borderRadius: 15,
  },

});

export default SelectStartButtons