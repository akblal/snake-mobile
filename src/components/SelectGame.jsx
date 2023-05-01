import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

import SelectGameModal from './SelectGameModal.jsx';

const SelectGame = ({ arrowDirection, toggleUpDown, pressedA, pressedB, handleA, selectGame, modalVisible }) => {

  const gameList = [
    {
      id: 0,
      name: 'Snake',
      available: true,
    },
    {
      id: 1,
      name: 'Tetris',
      available: false,
    },
    {
      id: 2,
      name: 'Bomberman',
      available: false,
    },
    {
      id: 3,
      name: 'Pokemon Red',
      available: false,
    },
    {
      id: 4,
      name: 'Metroid II',
      available: false,
    },
    {
      id: 5,
      name: 'Super Mario Bros',
      available: false,
    },
    {
      id: 6,
      name: 'Zelda',
      available: false,
    },
  ]

  const [gameID, setGameID] = useState(0);
  const [showText, setShowText] = useState(true);

  // Change the state per set time to allow for blinking effect.
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 750);
    return () => clearInterval(interval);
  }, []);

  //Matching the arrow to the game title
  useEffect(() => {
    if(arrowDirection === 'down') {
      if (gameID < 6) {
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

  const chooseGame = (name) => {
    selectGame(name);
  }

  return (
    <View style= {styles.selectGameContainer}>
      <View style= {styles.titleContainer}>
        <Text style= {styles.font}>Select Game {pressedA} {pressedB}</Text>

        {gameList.map((game, id) => {
          if (pressedA.slice(-2) === 'AA' && pressedA.length > 1 && id === gameID) {
            chooseGame(game.name)
            return (
              <Text key= {id}>{game.name} selected!</Text>
            )
          }

        })}

        {modalVisible ? <Text>Visible</Text> : <Text>Not Visible</Text>}

      </View>
      <View style= {styles.gameSelectionContainer}>
        <Text style= {styles.font}>List of Games</Text>
        <View style= {styles.gameListContainer}>
          <View style= {styles.gameList}>
            {gameList.map((game, id) => {
              if (id === gameID) {
                return (
                  <View style= {styles.highlightedGame} key= {id}>
                    <Text style= {styles.font}>></Text>
                    <Text style= {[styles.font, styles.gameTitle,{color: id === gameID && showText ? 'black' : 'teal'} ]}>{game.name}</Text>
                  </View>
                )
              } else {
                return (
                  <View style= {styles.highlightedGame} key= {id}>
                    <Text style= {[styles.font, {color: 'teal'}]}>></Text>
                    <Text style= {[styles.font, styles.gameTitle]} >{game.name}</Text>
                  </View>
                )
              }
            })}
            {gameList.map((game, id) => {
              if (id === gameID && (pressedA.slice(-1) === 'A' && pressedA.length % 2 === 1)) {
                return <SelectGameModal key= {id} handleA= {handleA} game= {game} pressedA= {pressedA}/>
              }
            })}
          </View>
        </View>
      </View>
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
    marginBottom: 10,
  },
  highlightedGame: {
    flexDirection: 'row',
  },

});

export default SelectGame;
