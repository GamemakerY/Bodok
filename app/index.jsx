import { StyleSheet, useColorScheme} from 'react-native'
import React from 'react'
import {Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
import { Colors } from '../constants/Colors'
import GuestOnly from '../components/auth/GuestOnly'




const Home = () => {
  console.log('The API Key is', process.env.EXPO_PUBLIC_API)
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <GuestOnly>

    <ThemedView style = {styles.container}>

      <ThemedLogo/>
      <Spacer height={20}/>

      <ThemedText style = {{fontsize: 18, fontWeight: 'bold'}} title = {true}>The Number 1</ThemedText>
      <Spacer height={10}/>

      <ThemedText title = {true}>Book-Sharing App</ThemedText>
      <Spacer height={50}/>

      <Link href = '/login' style = {[styles.link, {borderBottomColor: theme.textmuted}]}>
      <ThemedText>Login </ThemedText>
      </Link>
      <Spacer height={10}/>

      <Link href = '/register' style = {[styles.link, {borderBottomColor: theme.textmuted}]}>
      <ThemedText>Register</ThemedText>
      </Link>
      <Spacer height={10}/>

    </ThemedView>
    </GuestOnly>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
    link: {
    borderBottomWidth: 1,
    
  }
  
})