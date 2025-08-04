
import { Stack, Tabs } from 'expo-router'
import React from 'react'
import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import UserOnly from '../../components/auth/UserOnly'
import { LibraryProvider } from '../../contexts/LibraryContext'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <LibraryProvider>
    <UserOnly>
    <Tabs 
    screenOptions={{
        headerShown: false,
        tabBarStyle: {
            backgroundColor: theme.background,
            height: 90,
        },
        tabBarActiveTintColor: theme.textmuted,
        tabBarInactiveTintColor: theme.text,

    }}>  


    <Tabs.Screen 
    name = "home" 
    options={{title: "Home",  tabBarIcon: ({focused}) => (
      <Ionicons
      size={24}
      name={focused ? 'home' : 'home-outline'}
      color={focused ? theme.textmuted : theme.text}

      />)}}/>

    <Tabs.Screen 
    name = "saved" 
    options={{title: "Saved", tabBarIcon: ({focused}) => (
      <Ionicons
      size={24}
      name={focused ? 'book' : 'book-outline'}
      color={focused ? theme.textmuted : theme.text}

      />)}}/>

        <Tabs.Screen 
    name = "profile" 
    options={{title: "Profile", tabBarIcon: ({focused}) => (
      <Ionicons
      size={24}
      name={focused ? 'person' : 'person-outline'}
      color={focused ? theme.textmuted : theme.text}

      />
    )}}/>

    <Tabs.Screen name = 'createbook' options={{href: null}}/>
    <Tabs.Screen name = 'viewlibrary' options={{href: null}}/>

    </Tabs>  
    </UserOnly>
    </LibraryProvider>
  )
}

export default DashboardLayout
