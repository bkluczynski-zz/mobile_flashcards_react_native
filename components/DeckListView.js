import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getAllDecks } from '../utils/helpers'
import { receiveAllDecks } from '../actions'
import { connect } from 'react-redux'


class DeckListView extends Component {

  componentDidMount(){
    const { dispatch } = this.props;
    getAllDecks().then(results => dispatch(receiveAllDecks(JSON.parse(results))))
  }

  render(){
    const { decks } = this.props

    return (
      <View>
        {decks && Object.keys(decks).map(key => decks[key]).map(deck => (
            <View key={deck.title}>
              <Text>
                {deck.title}
              </Text>
            </View>
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
