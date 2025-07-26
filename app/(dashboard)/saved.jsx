import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const Saved = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedText>Here are your saved Books</ThemedText>
    </ThemedView>
  )
}

export default Saved

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
})