import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import {Colors} from '../constants/Colors.js'
import ThemedView from '../components/ThemedView.jsx'
import ThemedText from '../components/ThemedText.jsx'
import Spacer from '../components/Spacer.jsx'

const About = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.head}> About </ThemedText>
      <Spacer/>
      <Link href = '/' style = {styles.link}> 
      <ThemedText>Back </ThemedText>
      </Link>
    </ThemedView>

   
  )
}

export default About

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  head: {
    fontWeight: 'bold',
    fontSize: 18
  },
  img: {
    marginVertical: 20,

  },

  link: {marginVertical: 10,
    borderBottomWidth: 1
  }

})