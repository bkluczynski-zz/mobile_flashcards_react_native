import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

class QuizView extends Component {

  render(){

    console.log('quiz', this.props)

    return (
      <View style={styles.container}>
        <Text>
          This is a test
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
})

export default QuizView;
