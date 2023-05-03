import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated} from 'react-native';
import { useFonts } from 'expo-font';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const ProgressBar = ({ game, failEndPercent, getProgress }) => {

  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);

  useInterval(() => {
    if (game.available) {
      // update progress until 100
      let update = Math.floor(Math.random() * 50);

      if (progress + update > 100) {
        update = 100 - progress;
      }
      getProgress(progress + update);
      if(progress < 100) {
        setProgress(progress + update);
      }

    } else {
      let update = Math.floor(Math.random() * 50);
      if (progress + update > failEndPercent) {
        update = failEndPercent - progress;
      }
      getProgress(progress + update);
      if(progress < failEndPercent) {
        setProgress(progress + update);
      }
    }
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 5,
      useNativeDriver: false
    }).start();
  },[progress])

  useEffect(() => {
    getProgress(progress)
  }, [])

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  })

  const widthFail = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  })

  let [fontsLoaded] = useFonts({
    'PressStart2P': require('../../assets/fonts/PressStart2P-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return undefined
  }

  return (
    <View style={styles.container}>

      {game.available && progress === 100 ?
        <Text style= {styles.loadingText}>Loading Complete!</Text> :
        game.available && <Text style= {styles.loadingText}>Loading...</Text>
      }
      {!(game.available) && progress < failEndPercent ?
        <Text style= {styles.loadingText}>Loading...</Text> :
        !(game.available) && <Text style= {styles.loadingText}>Load Failed</Text>
      }

      {game.available ?
        <View style={styles.progressBar}>
          <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: "teal", width }]}/>
        </View> :
        <View style={styles.progressBar}>
          <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: "red", width: widthFail }]}/>
        </View>
      }
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 8,
    width: '100%',
  },
  loadingText:  {
    marginBottom: 5,
    fontFamily: 'PressStart2P',
  },
  progressBar: {
    height: 20,
    flexDirection: "row",
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 1,
    width: '100%',
  },
});

export default ProgressBar
