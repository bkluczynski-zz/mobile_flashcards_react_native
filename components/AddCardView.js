import React, { Component } from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'
import SubmitButton from './SubmitButton'


class AddCardView extends Component {

  state = {
    question: '',
    answer: '',
  }

  submit = () => {
    console.log("pressed!")
  }

  render(){

    console.log("questions are,", this.state.question)
    console.log("questions are,", this.state.answer)


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
        <SubmitButton onPress={this.submit}/>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export default AddCardView;
