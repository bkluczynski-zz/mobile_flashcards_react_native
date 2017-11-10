import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  NewDeckView from './components/NewDeckView'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createLogger } from 'redux-logger'
import {  setAsyncDatabase } from './utils/helpers'
import AddCardView from './components/AddCardView'
import DeckListView from './components/DeckListView'
import { TabNavigator, StackNavigator } from 'react-navigation';

  const Tabs = TabNavigator({
    DeckListView: {
      screen: DeckListView,
      navigationOptions: {
        tabBarLabel: 'DECKS',
      }
    },
    NewDeckView: {
      screen: NewDeckView,
      navigationOptions: {
        tabBarLabel: 'NEW DECK',
      }
    }
  }, {
  navigationOptions: {
    header: null
  },
  tabBarPosition: 'top',
  tabBarOptions: {
    activeTintColor: '#e91e63',
    style: {
      height: 56,
      backgroundColor: 'red',
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

export default class App extends React.Component {

  render() {

    const logger = createLogger()
    const store = createStore(
      reducer,
      applyMiddleware(logger)
    )

    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <Tabs/>
        </View>
      </Provider>
    );
  }
}
