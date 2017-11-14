import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import SubmitButton from './SubmitButton'
import TextButton from './TextButton'
import { NavigationActions } from 'react-navigation'


class QuizView extends Component {

  state = {
    question : '',
    answer : '',
    showAnswer: false,
    correctAnswer : 0,
    allAnswers : 0,
    questions : []
  }

  componentDidMount(){
    this.setState({questions : this.props.cards[0].questions.slice()}, () => { this.playQuiz(this.state.questions)} )

  }


  playQuiz = (cardsToPlay) => {
    if (cardsToPlay.length > 0) {
      const { question, answer } = cardsToPlay.pop()
      this.setState({question, answer})
    }
  }

  calculatePercentage = (allAnswers) => {
    const { correctAnswer } = this.state;
    return `Success rate : ${Math.round( correctAnswer / allAnswers * 100)}%`
  }

  goHome = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  correctAnswer = (cardsToPlay) => {
    this.playQuiz(cardsToPlay)
    this.setState({showAnswer : false})
    this.setState({correctAnswer : this.state.correctAnswer + 1})
    this.setState({allAnswers : this.state.allAnswers + 1})
  }

  incorrectAnswer = (cardsToPlay) => {
    this.playQuiz(cardsToPlay)
    this.setState({showAnswer : false})
    this.setState({allAnswers : this.state.allAnswers + 1})
  }

  render(){

    const { title } = this.props.navigation.state.params
    const { cards } = this.props
    const filteredCards = this.state.questions

    const allCardsInDeck = this.props.cardsNumber
    const cardsLeftInGame = this.state.questions.length

    console.log('caaards', this.state)

    console.log('cards', filteredCards)
    console.log('cards2', cards[0].questions)
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 15}}>
          {this.state.allAnswers === allCardsInDeck ?
          this.calculatePercentage(allCardsInDeck):
          null}
        </Text>
          <Text>
            {`Cards left to be played: ${cardsLeftInGame} out of ${allCardsInDeck}`}
          </Text>
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
        <SubmitButton onPress={() => this.incorrectAnswer(filteredCards)}
         text={'INCORRECT'}/>
       <SubmitButton onPress={this.goHome}
          text={'Go Back'}/>
      </View>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    cards : Object.keys(state).map(deck => state[deck]).filter(deck => deck.title === ownProps.navigation.state.params.title),
    cardsNumber : Object.keys(state).map(deck => state[deck]).filter(deck => deck.title === ownProps.navigation.state.params.title)[0].questions.length
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
