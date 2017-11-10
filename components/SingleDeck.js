import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View} from 'react-native'
import { List, ListItem } from 'react-native-elements'



const SingleDeck = ({title, onPress}) => {
  return (

    <ListItem
        key={title}
        title={title}
        onPress={onPress}
        subtitle={"Cards:"}
        titleStyle={{textAlign:'center', fontSize:24, paddingTop:30}}
        subtitleStyle={{textAlign:'center', paddingBottom:30}}
      />
  )
}



export default SingleDeck;
