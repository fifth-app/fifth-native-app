import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// class Counter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {number: 1};
//     }
    
//     componentDidMount() {
//       this.interval = setInterval(() => {
//         <Text style = {styles.buttonText}>this.state.number, this.props.counter</Text>
//       }, 1000);
//     componentWillUnmount() {
//         clearInterval(this.interval);
//       }
    
//     }

export default function TimerScreen(props) {
    const { navigate } = props.navigation;
    return (
    // <View style={styles.container}> 
    //     <View bottom={styles.buttonContainer.bottom}>
    //         <TouchableOpacity 
    //         style={styles.button}
    //         onPress={() => navigate('Links', { name: 'Jane' })}
    //         >
    //             <Text style={styles.buttonText}>
    //                 Test Button
    //             </Text>
    //         </TouchableOpacity>
    //     </View>
    //     {/* <Text style={styles.buttonText}>
    //             Test Button
    //     </Text> */}
    // </View>
        <View style={styles.container}>

            <View bottom={styles.buttonContainer.bottom}>
            <TouchableOpacity 
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Test button
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
