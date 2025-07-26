import { Image, useColorScheme } from 'react-native'
import LogoLight from '../assets/images/logo_light.png'
import LogoDark from '../assets/images/logo_dark.png'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const ThemedLogo = ({...props}) => {

    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? LogoDark : LogoLight


  return (
    <Image source={logo} {...props}/>
  )
}

export default ThemedLogo
