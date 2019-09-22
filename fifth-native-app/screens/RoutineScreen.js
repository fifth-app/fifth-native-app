import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';

var moves = {
  'fifth_rest_state': {
    'next_moves': [
      'tendu_basic'],
    'official_name': 'Fifth'
    ,
  },
  'tendu_basic': {
    'next_moves': [
      'tendu_flex',
      'tendu_down',
      'tendu_in',
      'fifth_rest_state'],
    'official_name': 'Tendu'
  },
  'tendu_flex': {
    'next_moves': [
      'tendu_basic'],
    'official_name': 'Flex'

  },
  'tendu_down': {
    'next_moves': [
      'tendu_basic'],
    'official_name': 'Foot down'
  },
  'tendu_in': {
    'next_moves': [
      'tendu_basic'],
    'official_name': 'Turn in'
  }
}

export default function RoutineScreen() {
  const movesArray = Object.values(moves);
  const [currentMove, setCurrentMove] = useState('');

  return (
    <ScrollView style={styles.container}>
      {
        movesArray.map((move, index) => {
          console.log(movesArray[index]);
          return <Button title={movesArray[index].official_name} key={index} />
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
