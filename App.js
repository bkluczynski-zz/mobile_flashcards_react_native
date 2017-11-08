import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  NewDeckView from './components/NewDeckView'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createLogger } from 'redux-logger'


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
          <NewDeckView/>
        </View>
      </Provider>
    );
  }
}
