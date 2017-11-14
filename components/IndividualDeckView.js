import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import SubmitButton from './SubmitButton'
import { connect } from 'react-redux'
import DeckListView from './DeckListView'
import { NavigationActions } from 'react-navigation'


class IndividualDeckView extends Component {

  goToAddingCard = (title) => {
    this.props.navigation.navigate('AddCardView', { title:  title})
  }

  goToQuiz = (title) => {
    this.props.navigation.navigate('QuizView', { title:  title})
  }

  goHome = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render(){
    const { title } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>
          {title}
        </Text>
        <Text style={{ fontSize: 20 }} >
          {`Cards: ${this.props.numberOfCards}`}
        </Text>
        <SubmitButton text={"Add Card"} onPress={() => this.goToAddingCard(title)}/>
        <SubmitButton text={"Start Quiz"} onPress={() => this.goToQuiz(title)}/>
        <SubmitButton text={"Go Back"} onPress={this.goHome}/>
      </View>

    )
  }

}

function mapStateToProps(state, ownProps){
  return {
    numberOfCards : Object.keys(state).map(deck => state[deck])
    .filter(deck => deck.title === ownProps.navigation.state.params.title)[0].questions.length
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

export default connect(mapStateToProps)(IndividualDeckView);
