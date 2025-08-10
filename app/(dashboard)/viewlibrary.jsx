import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'
import { router } from 'expo-router'
import ThemedCard from '../../components/ThemedCard'
import { useLibrary } from '../../hooks/useLibrary'


const ViewLibrary = () => {

   const handlePress = () => {
      router.replace('/createbook')
    }

  const {books} = useLibrary()

  return (
    <ThemedView  style={styles.container}>
      <Spacer height = {20}/>
      <ThemedText style = {styles.heading} title={true}>Here are all your books:</ThemedText>
      <Spacer height = {20}/>
        <FlatList
        data = {books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle = {styles.list}
        renderItem={({item})=>(
          <ThemedCard
          icon='book-outline'
          heading={item.title}
          text={`By ${item.author}`}/>
        )}/>
        
        <ThemedButton value = {'Add Books'} onPress={() => {handlePress()}}
         alignSelf="center"></ThemedButton>
         </ThemedView>
         //Eventually, change the style of the button with a + symbol and maybe fix it at the bottom right
  )
}

export default ViewLibrary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'stretch',
        padding: 15
    },
      heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAligh: 'center'
    }
})