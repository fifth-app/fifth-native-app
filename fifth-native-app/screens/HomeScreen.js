import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function HomeScreen(props) {
  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              require('../assets/images/fifth.png')
            }
            resizeMode='cover'
            style={styles.welcomeImage}
          />
        </View>


      </ScrollView>

      <View bottom={styles.buttonContainer.bottom}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigate('Links', { name: 'Jane' })}
        >
          <Text style={styles.buttonText}>
              Create a Routine
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
