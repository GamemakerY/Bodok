import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import ThemedView from '../../../components/ThemedView'
import Spacer from '../../../components/Spacer'
import ThemedText from '../../../components/ThemedText'
import { useLibrary } from '../../../hooks/useLibrary'
import ThemedCard from '../../../components/ThemedCard'
import ThemedLoader from '../../../components/ThemedLoader'

const LibraryDetails = () => {

    const {id} = useLocalSearchParams()
    const {viewBooks, fetchLibraryByID, viewLibrary} = useLibrary()


    useEffect(() => {
        if (id) {
            fetchLibraryByID(id);
        }
    }, [fetchLibraryByID, id]);

    if (viewLibrary.length === 0) {
        return (
            <ThemedLoader/>
        )
    }

  return (
    <ThemedView  style={styles.container}>
      <Spacer height = {20}/>
      <ThemedText style = {styles.heading} title={true}>{viewLibrary[0].name}</ThemedText>
      <Spacer height = {10}/>
        <View style = {{
        padding: 10,
        backgroundColor: 'white'
      }}>
    <ThemedText title = {true}>Description: </ThemedText>
      <ThemedText>{viewLibrary[0].description}</ThemedText>
      </View>
      <Spacer height = {20}/>

      <View style = {{
        padding: 10,
        backgroundColor: 'white'
      }}>

    <ThemedText title = {true}>Address: </ThemedText>
      <ThemedText>{viewLibrary[0].address}</ThemedText>
      </View>

      <Spacer height = {20}/>
      <View style = {{padding: 10}}>
      <ThemedText style = {styles.heading} title={true}>Books</ThemedText>
      </View>

        <FlatList
        data = {viewBooks}
        keyExtractor={(item) => item.$id}
        contentContainerStyle = {styles.list}
        renderItem={({item})=>(
          <ThemedCard
          icon='book-outline'
          heading={item.title}
          text={`By ${item.author}`}/>
        )}/>
    </ThemedView>
  )
}

export default LibraryDetails

const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAligh: 'center'
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'stretch',
        padding: 15
    },
})