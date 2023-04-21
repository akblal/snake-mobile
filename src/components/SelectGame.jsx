import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

const SelectGame = ({ arrowDirection, toggleUpDown }) => {

  const gameList = [
    {
      name: 'Snake',
    },
    {
      name: 'Tetris',
    },
    {
      name: 'Bomberman',
    },
    {
      name: 'Pokemon',
    },
    {
      name: 'Metroid Prime',
    },
    {
      name: 'Super Mario Bros.',
    },
    {
      name: 'Zelda: Ocarina of Time',
    },
  ]

  const [gameID, setGameID] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 750);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if(arrowDirection === 'down') {
      if (gameID < 5) {
        let counter = gameID + 1;
        setGameID(counter)
      }
    } else if (arrowDirection === 'up') {
      if (gameID >= 1) {
        let counter = gameID - 1;
        setGameID(counter)
      }
    }

  }, [toggleUpDown])

  let [fontsLoaded] = useFonts({
    'PressStart2P': require('../../assets/fonts/PressStart2P-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return undefined
  }

  return (
    <View style= {styles.selectGameContainer}>
      <View style= {styles.titleContainer}>
        <Text style= {styles.font}>Select Game</Text>
      </View>
      <View style= {styles.gameSelectionContainer}>
        <Text style= {styles.font}>List of Games</Text>
        <View style= {styles.gameListContainer}>
          <View>
            <Text style= {styles.font}>></Text>
          </View>
          <View style= {styles.gameList}>
            {gameList.map((game, id) => {

              return   <Text style= {[styles.font, styles.gameTitle,{color: id === gameID && showText ? 'black' : 'teal'} ]} id = {id}>{game.name}</Text>


            })}
            <Text>{arrowDirection}</Text>
          </View>

        </View>

      </View>
      <Text>{gameID}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  selectGameContainer: {
    flex: 7,
    borderColor: 'red',
    width:'100%',

  },
  titleContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
  },
  font: {
    fontFamily: 'PressStart2P',
  },
  gameSelectionContainer: {
    flex: 5,
    borderColor: 'black',
    borderWidth: 3,
    width: '100%',
    alignItems: 'center',
  },
  gameListContainer: {
    borderColor: 'pink',
    borderWidth: 3,
    flexDirection: 'row',
  },
  gameList: {
    marginLeft: 5,
  },
  gameTitle: {
    fontFamily: 'PressStart2P',
    marginBottom: 5,
  },
  blinkOn: {
    color: 'teal',
  },
  blinkOff: {
    color: 'black',
  },

});

export default SelectGame;
