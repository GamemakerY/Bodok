import { FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedCard from '../../components/ThemedCard'
import { useLibrary } from '../../hooks/useLibrary'
import { useRouter } from 'expo-router'

const Home = () => {

  const {libraries, fetchBookByID, fetchLibraryByID} = useLibrary()
  const router = useRouter()

  return (
    <ThemedView style = {styles.container}>
      
      <Spacer/>
      <ThemedText>Here are all the listed libraries</ThemedText>
      <Spacer height = {5}/>

      <FlatList
        data = {libraries}
        keyExtractor={(item) => item.$id}
        contentContainerStyle = {styles.list}
        renderItem={({item})=>(

          <TouchableOpacity onPress={() => {
            fetchBookByID(item.userID)
            fetchLibraryByID(item.userID)
            router.push(`/libraries/${item.userID}`)}}>
            

          <ThemedCard
          icon='library-outline'
          heading={item.name}
          text={`${item.description}`}/>


          </TouchableOpacity>

        )}/>
    
        
        </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
        container: {flex: 1,
        justifyContent: "flex-start",
        alignItems: 'stretch',
        padding: 15}
})