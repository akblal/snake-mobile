import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, Pressable, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SelectGameModal = ({ modalVisible, handleModalVisible, handleA }) => {

  // useEffect(() => {
  //   handleA();
  // }, [])
  return (
    <SafeAreaView>
      <Modal
        transparent= {true}
        visible={modalVisible}>
        <View style= {styles.container}>
          <Text>Game Selected</Text>
          <Pressable
            onPress={() => handleModalVisible('close')}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    zIndex: 5,
    // position: 'absolute',
    // top: 100,
    // left: 100,
    borderWidth: 1,
  },
});

export default SelectGameModal