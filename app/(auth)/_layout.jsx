import { StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import GuestOnly from '../../components/auth/GuestOnly'

export default function AuthLayout(){
    return(
        <GuestOnly>
        <StatusBar style="auto"/>
        <Stack
        screenOptions = {{headerShown: false, animation: "none"}}/> 
        </GuestOnly>
    )
}

