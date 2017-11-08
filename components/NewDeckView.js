import React, { Component } from 'react'
import { View,
         TouchableOpacity,
         Text,
         StyleSheet,
         TextInput,
         KeyboardAvoidingView
       } from 'react-native'
import SubmitButton from './SubmitButton'

class NewDeckView extends Component {

  state = {
    deckTitle: ''

  }

  submit = () => {
    console.log("sent")
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, padding:20, textAlign:'center'}}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(deckTitle) => this.setState({deckTitle})}
          value={this.state.deckTitle}
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
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin:20
  },
})

export default NewDeckView