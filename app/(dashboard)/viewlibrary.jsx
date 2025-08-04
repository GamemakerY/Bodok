import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'
import { router } from 'expo-router'
import ThemedCard from '../../components/ThemedCard'

const ViewLibrary = () => {

   const handlePress = () => {
      router.replace('/createbook')
    }

  return (
    <ThemedView  style={styles.container}>
        <ThemedCard
        icon= "book-outline"
        heading= "Title"
        text="Book description is a thing"
        style = {{
        }}/>
        <ThemedButton value = {'Add Books'} onPress={() => {handlePress()}}></ThemedButton>
    </ThemedView>
  )
}

export default ViewLibrary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'center',
        padding: 15
    },
})