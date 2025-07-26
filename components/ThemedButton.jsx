import { StyleSheet, Pressable, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import ThemedText from './ThemedText'




function ThemedButton ({style, value, ...props}) {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <Pressable style = {({pressed}) =>[[styles.btn, {backgroundColor: theme.primary
    }], pressed && styles.pressed]} {...props}>
        <ThemedText style = {{color: theme.backgroundLight}}>{value}</ThemedText>
    </Pressable>
  )
}


const styles = StyleSheet.create({
    btn: {
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
    },
    pressed: {
        opacity: 0.5
    },
})

export default ThemedButton

