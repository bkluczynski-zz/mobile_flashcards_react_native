import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import SubmitButton from './SubmitButton'
import { connect } from 'redux'

class IndividualDeckView extends Component {

  render(){

    console.log("indie", this.props)
    return (
      <View>
        <Text>
          Something
        </Text>
      </View>

    )
  }


}

export default IndividualDeckView;
