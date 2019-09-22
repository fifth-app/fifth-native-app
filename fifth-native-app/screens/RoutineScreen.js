import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

var moves = {
  'fifth_rest_state': {
    'next_moves': [
      'tendu_basic',
      'degage',
      'grand_battement'],
    'official_name': 'Fifth'
    ,
    'poss_starting': false
  },
  'tendu_basic': {
    'next_moves': [
      'tendu_flex',
      'tendu_down',
      'tendu_in',
      'fifth_rest_state'],
    'official_name': 'Tendu',
    'poss_starting': true
  },
  'tendu_flex': {
    'next_moves': [
      'tendu_basic'],
    'official_name': 'Flex',
    'poss_starting': false

  },
  'tendu_down': {
    'next_moves': [
      'tendu_basic'],
    'official_name': 'Foot down',
    'poss_starting': false
  },
  'tendu_in': {
    'next_moves': [
      'tendu_basic'],
    'official_name': 'Turn in',
    'poss_starting': false
  },
  'degage': {
    'next_moves': [
      'tendu_basic',
      'degage',
      'grand_battement'],
    'official_name': 'Degage',
    'poss_starting': true
  },
  'grand_battement': {
    'next_moves': [
      'tendu_basic',
      'degage',
      'grand_battement'],
    'official_name': 'Grand battement',
    'poss_starting': true
  }
}

export default function RoutineScreen() {
  const [startingMovesArray, setStartingMovesArray] = useState(Object.keys(moves));
  const [currentMove, setCurrentMove] = useState('');
  const [nextMoves, setNextMoves] = useState([]);
  const [routineMoves, setRoutineMoves] = useState([]);

  const handleClick = (move) => {
    setCurrentMove(move);
    setNextMoves(moves[move].next_moves);
    setRoutineMoves([...routineMoves, move])
  }
  const handleStartingClick = (move) => {
    setCurrentMove(move);
    setNextMoves(moves[move].next_moves);
    setRoutineMoves([...routineMoves, move])
    setStartingMovesArray([]);
  }
  return (
    <ScrollView style={styles.container}>
      { routineMoves.length === 0 ? null :
      <View>
        <Text>Current routine</Text>
       {
          routineMoves.map((move, index) => {
            return (<TouchableOpacity key={index} title={moves[move].official_name} onPress={() => handleClick(move)}>
              <Text style={styles.buttonText}>
                {moves[move].official_name}
              </Text>
            </TouchableOpacity>) 
          })
        }
      </View>
      }

      { startingMovesArray.length > 0 || routineMoves.length >= 8 ? null :
        <View>
          <Text>Choose your next move!</Text>
        {
            nextMoves.map((move, index) => {
              return (<TouchableOpacity key={index} title={moves[move].official_name} onPress={() => handleClick(move)}>
                <Text style={styles.buttonText}>
                  {moves[move].official_name}
                </Text>
              </TouchableOpacity>) 
            })}
        </View>
      }

       { startingMovesArray.length === 0 ? null :
      <View>
        <Text>Choose your first move!</Text>
        {
        startingMovesArray.map((move, index) => {
          return moves[move].poss_starting ? (<TouchableOpacity key={index} title={moves[move].official_name} onPress={() => handleStartingClick(move)}>
            <Text style={styles.buttonText}>
              {moves[move].official_name}
            </Text>
          </TouchableOpacity>) : null;
        })}
      </View>
      }

      {
        routineMoves.length === 8 ?
        <Button title="start"/> : null
      }
    </ScrollView>
    );
  }

RoutineScreen.navigationOptions = {
  title: 'Routine',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignContent: 'flex-end'
  },
  button: {
    backgroundColor: "white",
    // margin: 
    // borderColor: "grey",
    // borderWidth: 1
  },
  buttonText: {
    alignContent: 'center', 
    fontSize: 30,
    fontFamily: "sans-serif-light",
    textAlign: "center",
    fontStyle: "italic",
    margin: 30
  }
});
