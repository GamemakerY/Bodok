import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ThemedCard = () => {
   return (
      <View style = {[
          {backgroundColor: Theme.backgroundDark}, styles.card, style, ]}
          {...props}/>
    )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20
    }
})