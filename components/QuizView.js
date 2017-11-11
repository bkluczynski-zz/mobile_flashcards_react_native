import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import SubmitButton from './SubmitButton'


class QuizView extends Component {

  componentDidMount(){
    this.playQuiz(filteredCards)
  }

  state = {
    question : '',
    answer : '',
  }


  playQuiz = (cardsToPlay) => {
    const { question, answer } = cardsToPlay.pop()
    this.setState({question})
    this.setState({answer})
  }

  correctAnswer = (cardsToPlay) => {
    this.playQuiz(cardsToPlay)
  }

  incorrectAnswer = (cardsToPlay) => {
    this.playQuiz(cardsToPlay)
  }



  render(){

    const { title } = this.props.navigation.state.params
    const { cards } = this.props

    const filteredCards = cards[0].questions

    console.log('cards', filteredCards)
    return (
      <View style={styles.container}>
          <Text style={{fontSize: 30}}>
            {this.state.question}
            {this.state.answer}
          </Text>
        <SubmitButton onPress={() => this.correctAnswer(filteredCards)} text={'CORRECT'}/>
        <SubmitButton onPress={() => this.incorrectAnswer(filteredCards)} text={'INCORRECT'}/>
      </View>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    cards : Object.keys(state).map(deck => state[deck]).filter(deck => deck.title === ownProps.navigation.state.params.title)
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

export default connect(mapStateToProps)(QuizView);
