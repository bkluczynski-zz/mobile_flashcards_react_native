import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getAllDecks } from '../utils/helpers'
import { receiveAllDecks } from '../actions'
import { connect } from 'react-redux'
import  SingleDeck from './SingleDeck'
import { List, ListItem } from 'react-native-elements'
import { TabNavigator, StackNavigator } from 'react-navigation';
import IndividualDeckView from './IndividualDeckView'


class DeckListView extends Component {

  componentDidMount(){
    const { dispatch } = this.props;
    getAllDecks().then(results => dispatch(receiveAllDecks(JSON.parse(results))))
  }

  onPress = () => (
    this.props.navigation.navigate('IndividualDeckView')
  )


  render(){
    const { decks } = this.props

    console.log("this navigation deck,", this.props)

    return (
      <List
        containerStyle={{marginTop:0}}
        >
        {decks && Object.keys(decks).map(key => decks[key]).map(deck => (
          <SingleDeck
            key={deck.title}
            title={deck.title}
            onPress={this.onPress}
            />
        ))}
      </List>
    )

  }

}

function mapStateToProps(decks){
  return {
    decks
  }
}


export default connect(mapStateToProps)(DeckListView)
