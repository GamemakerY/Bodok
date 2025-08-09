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
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)

    const {createBook} = useLibrary()
    const router = useRouter()

    const handleSubmit = async () => {
      if (!title.trim() || !author.trim() || !description.trim()) return
      setLoading(true)

      await createBook({title, description, author})
      
      setTitle("")
      setAuthor("")
      setDescription("")

      router.replace('/viewlibrary')

      setLoading(false)
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
    <Spacer/>
    <ThemedText title={true} style = {styles.title}>Host Library</ThemedText>

    <ThemedTextInput placeholder = {"Library Name"} style = {styles.input}
    onChangeText = {setTitle}
    value = {title}></ThemedTextInput>

    <Spacer height = {30}/>
    <ThemedTextInput placeholder = {"Location"} style = {styles.input}
    onChangeText = {setAuthor}
    value = {author}></ThemedTextInput>

    <Spacer  height = {30}/>
    <ThemedTextInput placeholder = {"Description"} style = {styles.multiline}
    onChangeText = {setDescription}
    value = {description}
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