import { StyleSheet } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const ContactPage = () => {
  return (
    <ThemedView style = {styles.container}>
      <ThemedText style = {styles.head}> Contacts </ThemedText>
      <Spacer/>
      
      <Link href = '/' style = {styles.link}> 
      <ThemedText>Back 
      </ThemedText>
      </Link>

    </ThemedView>

   
  )
}

export default ContactPage

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