import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';

export default function TimerScreen(props) {
    const { navigate } = props.navigation;
    return (
        <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}/>
  
        <View bottom={styles.buttonContainer.bottom}>
          <Timer totalDuration={10000} start={true} />
          {/* <TouchableHighlight onPress={this.toggleTimer}>
              <Text style={{fontSize: 30}}>{!this.state.timerStart ? "Start" : "Stop"}</Text>
          </TouchableHighlight> */}
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigate('Links', { name: 'Jane' })}>
            <Text style={styles.buttonText}>
                Create a Routine
            </Text>
          </TouchableOpacity>
        </View>
      </View>

  );
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
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 350,
    height: 280,
    resizeMode: 'contain',
    marginTop: 100,
    marginLeft: -10,
  },
  button: {
    backgroundColor: "white",
    // color: "purple",
  },
  buttonContainer: {
    bottom: 200,
  },
  buttonText: {
    alignContent: 'center',
    fontSize: 27,
    fontFamily: "sans-serif-light",
    textAlign: "center",
    fontStyle: "italic"
  }
});
