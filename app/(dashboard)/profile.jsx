import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { useUser } from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'
import ThemedOption from '../../components/ThemedOption'
import { router } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useLibrary } from '../../hooks/useLibrary'

const Profile = () => {

  const {setLibraryExist, libraryExist, librarySelf, books} = useLibrary()
  const {logout, user} = useUser()

  const viewLib = () => {
    router.replace('/viewlibrary')
  }

  const createLib = () => {
    router.replace('/createlibrary')
  }

  return (
    
    <ThemedView style={styles.container}>
    <Spacer/>

    <ThemedText style = {styles.heading} title = {true}>
      Your Library
    </ThemedText>

    <Spacer height = {5}/>


   {libraryExist && <TouchableOpacity onPress={() => viewLib()}>
    <ThemedOption
    icon="library-outline"
    heading={librarySelf[0].name}
    text={`${books.length} Books`}
    />
    </TouchableOpacity>}

    {!libraryExist && <TouchableOpacity onPress={() => createLib()}>
    <ThemedOption
    icon="add-outline"
    heading="Host Your Own Library"
    />
    </TouchableOpacity>}

    <View style = {{
      alignSelf: 'center'
    }}>

    <ThemedButton onPress={logout} value={'Logout'} >
    </ThemedButton>
    </View>  
    </ThemedView>

  )
}

export default Profile

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