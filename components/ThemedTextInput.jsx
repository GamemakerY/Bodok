import { TextInput, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'


const ThemedTextInput = ({style, ...props}) => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <TextInput placeholderTextColor = {theme.textmuted}
    style = {[
        {
                 backgroundColor: theme.backgroundLight,
                 color: theme.text,
                 padding: 15,
                 borderRadius: 8,
                 borderWidth: 1,
                 borderColor: theme.border,
                 
        },
        style,

    ]} {...props} />

  )
}


export default ThemedTextInput
