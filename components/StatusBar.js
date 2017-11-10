import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { Constants } from 'expo'


const CustomizedStatusBar = ({backgroundColor, ...props}) => {
  return (

    <View style={{backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent
        backgroundColor={backgroundColor}
        {...props} />
    </View>

  )
}

export default CustomizedStatusBar;
