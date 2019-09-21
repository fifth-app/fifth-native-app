import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

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
  return (
    <ScrollView style={styles.container}>
      <Text>Hello</Text>
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
