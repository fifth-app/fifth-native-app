import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';

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
      'tendu_basic',
      'degage',
      'grand_battement'],
    'official_name': 'Flex',
    'poss_starting': false

  },
  'tendu_down': {
    'next_moves': [
      'tendu_basic',
      'degage',
      'grand_battement'],
    'official_name': 'Foot down',
    'poss_starting': false
  },
  'tendu_in': {
    'next_moves': [
      'tendu_basic',
      'degage',
      'grand_battement'],
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
  const movesArray = Object.keys(moves);
  const [currentMove, setCurrentMove] = useState('');

  // const handleClick = {
  //   // console.log("hello")
  // }

  return (
    <ScrollView style={styles.container}>
      {
        movesArray.map((move, index) => {
          console.log(moves[move].poss_starting)
          return moves[move].poss_starting ? <Button key={index} title={move} onPress={() => setCurrentMove(move)} /> : null;
        })
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
  },
});
