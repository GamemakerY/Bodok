import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import {Colors} from '../constants/Colors.js'
import { StatusBar } from 'react-native-web'
import { UserProvider } from '../contexts/UserContext.jsx'
import { useUser } from '../hooks/useUser.js'

const RootLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  

  return (
    <UserProvider>

    <StatusBar style = "auto"/>
    <Stack screenOptions={{
      headerStyle: {backgroundColor: theme.background},
      headerTintColor: theme.text,
    }}> 
      <Stack.Screen name = "index" options={{ title: 'Home'}}/>
      <Stack.Screen name = "(dashboard)" options={{headerShown: false}}/>
      <Stack.Screen name = '(auth)' options = {{headerShown: false}}/>
      
    </Stack>   
    
    </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})

