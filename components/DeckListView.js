import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getAllDecks } from '../utils/helpers'
import { receiveAllDecks } from '../actions'
import { connect } from 'react-redux'
import  SingleDeck from './SingleDeck'

class DeckListView extends Component {

  componentDidMount(){
    const { dispatch } = this.props;
    getAllDecks().then(results => dispatch(receiveAllDecks(JSON.parse(results))))
  }

  onPress = () => (
    console.log("i've been pressed!")
  )

  render(){
    const { decks } = this.props

    return (
      <View>
        {decks && Object.keys(decks).map(key => decks[key]).map(deck => (
          <SingleDeck title={deck.title} onPress={this.onPress}/>
        ))}
      </View>
    )

  }

}

function mapStateToProps(decks){
  return {
    decks
  }

}


export default connect(mapStateToProps)(DeckListView)
