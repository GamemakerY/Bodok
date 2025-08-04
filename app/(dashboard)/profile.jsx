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

const Profile = () => {

  const {logout, user} = useUser()

  const handlePress = () => {
    router.replace('/viewlibrary')
  }

  return (
    
    <ThemedView style={styles.container}>
    <Spacer/>

    <ThemedText style = {styles.heading} title = {true}>
      Your Library
    </ThemedText>

    <Spacer height = {5}/>

    <TouchableOpacity onPress={() => handlePress()}>
    
    <ThemedOption
    icon="library-outline"
    heading="My Library"
    text="3 Books"
    arrow={true}
    />
    </TouchableOpacity>

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