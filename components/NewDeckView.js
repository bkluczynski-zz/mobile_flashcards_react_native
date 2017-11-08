import React, { Component } from 'react'
import { View,
         TouchableOpacity,
         Text,
         StyleSheet,
         TextInput,
         KeyboardAvoidingView
       } from 'react-native'

class NewDeckView extends Component {

  state = {
    deckTitle: ''

  }

  render(){
    return (
      <View>
        <Text style={{fontSize: 25}}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(deckTitle) => this.setState({deckTitle})}
          value={this.state.deckTitle}
          keyboardType={'default'}
          ></TextInput>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  input : {
    widht: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin:50
  },
})

export default NewDeckView
