import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import SubmitButton from './SubmitButton'
import TextButton from './TextButton'


class QuizView extends Component {

  state = {
    question : '',
    answer : '',
    showAnswer: false
  }

  componentDidMount(){
    this.playQuiz(this.props.cards[0].questions)
  }


  playQuiz = (cardsToPlay) => {
    if (cardsToPlay.length > 0) {
      const { question, answer } = cardsToPlay.pop()
      this.setState({question, answer})
    }
  }

  correctAnswer = (cardsToPlay) => {
    this.playQuiz(cardsToPlay)
    this.setState({showAnswer : false})
  }

  incorrectAnswer = (cardsToPlay) => {
    this.playQuiz(cardsToPlay)
    this.setState({showAnswer : false})
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
          </Text>
            <TextButton style={{padding: 10}} onPress={() => this.setState({showAnswer: true})}>
              {this.state.showAnswer
              ? <Text>
                {this.state.answer}
               </Text>
              : <Text>
                Answer
                </Text>

              }
            </TextButton>
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
