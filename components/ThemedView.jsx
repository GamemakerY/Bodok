import { useColorScheme, StyleSheet, SafeAreaView, View } from 'react-native'
import React from 'react'
import {Colors} from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedView = ({style, safe=true, ...props}) => {
    const colorScheme = useColorScheme()
    const Theme = Colors[colorScheme] ?? Colors.light

  if (!safe) return (
    <View style = {[
        {backgroundColor: Theme.background}, style, ]}
        {...props}/>
  )

  const insets = useSafeAreaInsets()
  return (
    <View style = {[
        {backgroundColor: Theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom
        }, style, ]}
        {...props}/>
  )

}

export default ThemedView

const styles = StyleSheet.create({})