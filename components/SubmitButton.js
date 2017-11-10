import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const SubmitButton = ({ onPress, text }) => {

  return (
    <TouchableOpacity
      onPress = { onPress }
      style= { styles.button }
      >
      <Text style={styles.submitBtnText}>
        {text}
      </Text>
    </TouchableOpacity>
  )

}


const styles = StyleSheet.create({
  submitBtnText: {
    backgroundColor: 'red',
    fontSize: 22,
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: 200,
    margin: 20,
  }
})

export default SubmitButton
