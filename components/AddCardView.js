import React, { Component } from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SubmitButton from './SubmitButton'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'
import { addCard } from '../utils/helpers'


class AddCardView extends Component {

  state = {
    question: '',
    answer: '',
  }

  goHome = () => {
    this.props.navigation.goBack()
  }

  submit = () => {
    const entry = this.state;
    const { dispatch } = this.props;
    const { title } = this.props.navigation.state.params

    //add to redux
    dispatch(addCardToDeck(title, entry))

    //save to db
    addCard(title, entry)    //go back home

    this.goHome()

  }

  render(){

console.log('Add card view', this.props)

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, padding:20, textAlign:'center'}}>
         Write your question and an answer in respective boxes
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(question) => this.setState({question})}
          >
        </TextInput>
        <TextInput
          style={styles.input}
          onChangeText={(answer) => this.setState({answer})}
          >
        </TextInput>
        <SubmitButton onPress={this.submit} text={'SUBMIT'}/>
        <SubmitButton text={"Go Back"} onPress={() => this.props.navigation.goBack()}/>
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
  input : {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin:20
  },
})

export default connect()(AddCardView);
