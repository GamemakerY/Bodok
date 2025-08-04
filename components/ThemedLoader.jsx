import { ActivityIndicator, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import ThemedView from './ThemedView'


const ThemedLoader = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView style = {{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
    <ActivityIndicator size='large' color = {theme.text}></ActivityIndicator>
    </ThemedView>
  )
}

export default ThemedLoader

const styles = StyleSheet.create({})