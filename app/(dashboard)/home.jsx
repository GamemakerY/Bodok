import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const home = () => {
  return (
    <ThemedView style = {styles.container}>
        <ThemedText>Here are all the libraries nearby</ThemedText>
    </ThemedView>
  )
}

export default home

const styles = StyleSheet.create({
    container: {flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})