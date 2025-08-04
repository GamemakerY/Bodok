import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import ThemedText from './ThemedText'
import { Colors } from '../constants/Colors'
import Spacer from './Spacer'

const ThemedOption = ({icon, heading, text}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <>
    <Spacer height = {6}/>
    <View style= {{
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: theme.backgroundLight,
      borderRadius: 8,
      padding: 10,
    }}>
    <Ionicons name = {icon} size = {36} style = {{
      color: theme.text,
      borderWidth: 1,
      borderRadius: 8,
      padding: 6,
      backgroundColor: theme.backgroundDark ,
      borderColor: theme.bordermuted,
      marginRight: 5,
    }}/>

    <View style = {{
      paddingHorizontal: 10
    }}>

    <ThemedText title = {true} style = {styles.heading}>{heading}</ThemedText>
    <ThemedText>{text}</ThemedText>
    </View>

    <Ionicons name = 'chevron-forward-outline' size = {40} style = {{
        color: theme.text,
        marginLeft: 'auto'
    }}/>

    </View>
    <Spacer height = {6}/>
    </>
  )
}

export default ThemedOption

const styles = StyleSheet.create({})