import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { useUser } from '../../hooks/useUser'
import { useRouter } from 'expo-router'
import { useLibrary } from '../../hooks/useLibrary'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const CreateLibrary = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(false)

    const {createLibrary} = useLibrary()
    const router = useRouter()

    const handleSubmit = async () => {
      if (!name.trim() || !description.trim() || !address.trim()) return
      setLoading(true)

      await createLibrary({name, description, address})
      
      setName("")
      setDescription("")
      setAddress("")

      router.replace('/profile')

      setLoading(false)
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
    <Spacer/>
    <ThemedText title={true} style = {styles.title}>Host Library</ThemedText>

    <ThemedTextInput placeholder = {"Library Name"} style = {styles.input}
    onChangeText = {setName}
    value = {name}></ThemedTextInput>

    <Spacer  height = {30}/>
    <ThemedTextInput placeholder = {"Description"} style = {styles.multiline}
    onChangeText = {setDescription}
    value = {description}
    multiline = {true}
    textAlignVertical="top"></ThemedTextInput>

    <Spacer  height = {30}/>
    <ThemedTextInput placeholder = {"Address And Contact"} style = {styles.multiline}
    onChangeText = {setAddress}
    value = {address}
    multiline = {true}
    textAlignVertical="top"></ThemedTextInput>

     <Spacer  height = {30}/>
    <ThemedButton disabled = {loading} value = {loading? "Saving...": "Create Book"}
    onPress = {handleSubmit}/>

    </ThemedView>
    </TouchableWithoutFeedback>

  )
}

export default CreateLibrary

const styles = StyleSheet.create({
  container: {flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    title: {fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 30,
        textAlign: "center"
    },
    input:  {width: '80%',
      botderRadius: 8,
    },
    multiline: {
      width: '80%',
      botderRadius: 8,
      minHeight: 100
  
    }
})