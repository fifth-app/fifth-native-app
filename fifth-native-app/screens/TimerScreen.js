import React, { Component, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
// TODO: Update stopwatch so only displays count
// TODO: Allow different tempo
// TODO: Use react-metronome module
// TODO: What are hooks?
class StopScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stopwatchStart: true,
            currTime: 0
        };
        this.stopStopwatch.bind(this);
    }
    stopStopwatch() {
        this.setState({stopwatchStart: false})
    }
}    
export default function TimerScreen(props) {
    const { navigate } = props.navigation;
    var [currTime, setCurrTime] = useState(0);
    var [start, setStart] = useState(true);
    useEffect( () => {
        if (currTime >= 8) {
            setStart(false)
        }
    }, [currTime])
    return (
        <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}/>
        <View style={styles.buttonContainer}>
          <Stopwatch start={start} options={options} getTime={(time) => setCurrTime(timeIntSeconds(time))} />
        </View>
      </View>

  );
  function timeIntSeconds(timeString) {
    //   Only works up to 60 counts--TODO: Use regex to expand
      return Number(timeString.substring(timeString.length-2))
  }
}

const options = {
    container: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 5,
        borderRadius: 5,
        width: 220,
      },
      text: {
        fontSize: 30,
        fontFamily: "sans-serif-light",
        color: '#000',
      }
}
TimerScreen.navigationOptions = {
  title: 'Timer',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 15,
    alignItems: 'center',
    alignContent: 'center'
  },
  button: {
    backgroundColor: "white",
    // color: "purple",
  },
  buttonContainer: {
    bottom: 500,
    alignItems: 'center',
  },
  buttonText: {
    alignContent: 'center',
    fontSize: 27,
    fontFamily: "sans-serif-light",
    textAlign: "center",
    fontStyle: "italic"
  }
});
