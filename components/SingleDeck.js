import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View} from 'react-native'


const SingleDeck = ({title, onPress}) => {
  return (
    <View style={styles.deck}>
      <TouchableOpacity
        onPress={onPress}
        >
        <Text style={{fontSize: 30, textAlign:'center'}}>
        {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  deck : {
    width: 400,
    height: 200,
  }
})


export default SingleDeck;
