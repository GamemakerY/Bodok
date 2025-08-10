import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const LibraryDetails = () => {

    const {id} = useLocalSearchParams()
  return (
    <View>
      <Text>ViewLibrary - {id}</Text>
    </View>
  )
}

export default LibraryDetails

const styles = StyleSheet.create({})