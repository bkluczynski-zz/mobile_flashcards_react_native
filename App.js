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
import StatusBar from './components/StatusBar'
import { TabNavigator, StackNavigator } from 'react-navigation';
import IndividualDeckView from './components/IndividualDeckView'


const Stack = StackNavigator({
  DeckListView: {
    screen: DeckListView
  },
  IndividualDeckView: {
    screen: IndividualDeckView
  },
  AddCardView: {
    screen: AddCardView
  },
}, {
  navigationOptions: {
    header: null
  },
})



  const Tabs = TabNavigator({
    DeckListView: {
      screen: Stack,
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
  },
   {
  navigationOptions: {
    header: null
  },
  tabBarPosition: 'top',
  tabBarOptions: {
    activeTintColor: 'red',
    labelStyle: {
    fontSize: 14,
  },
    style: {
      backgroundColor: 'white',

  }
}
})

export default class App extends React.Component {

  static navigationOptions = {
      header: {
        visible: false,
      }
    }

  render() {

    console.log("props",this.props)
    const logger = createLogger()
    const store = createStore(
      reducer,
      applyMiddleware(logger)
    )

    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <StatusBar
            backgroundColor={'red'}
            barStyle='light-content'/>
          <Tabs/>
        </View>
      </Provider>
    );
  }
}
