import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import SubmitButton from './SubmitButton'
import { connect } from 'redux'
import DeckListView from './DeckListView'

class IndividualDeckView extends Component {

  onPress = () => {
    this.props.navigation.navigate('AddCardView')
  }

  goHome = () => {
    this.props.navigation.goBack()
  }

  render(){
    const { title } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Text style={{paddingBottom: 60, fontSize: 30}}>
          {title}
        </Text>
        <SubmitButton text={"Add Card"} onPress={this.onPress}/>
        <SubmitButton text={"Start Quiz"}/>
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
})

export default IndividualDeckView;
