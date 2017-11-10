import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import SubmitButton from './SubmitButton'
import { connect } from 'redux'

class IndividualDeckView extends Component {

  render(){
    const { title } = this.props.navigation.state.params
    console.log("indie", this.props)
    return (
      <View style={styles.container}>
        <Text style={{paddingBottom: 60, fontSize: 30}}>
          {title}
        </Text>
        <SubmitButton text={"Add Card"}/>
        <SubmitButton text={"Start Quiz"}/>
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
