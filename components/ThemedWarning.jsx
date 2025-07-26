import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const ThemedWarning = (style, message, ...props) => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light


  return (
<Text style = {[styles.error, style, {props}, {
        color: theme.background
    }]}>{message}
    </Text>
  )
}

export default ThemedWarning

const styles = StyleSheet.create({
    error: {
        padding: 10,
        backgroundColor:Colors.warning,
        borderRadius: 8,
        marginHorizontal: 10,
    }

})