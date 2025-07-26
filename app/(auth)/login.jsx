import { Keyboard, StyleSheet, TouchableWithoutFeedback, useColorScheme} from 'react-native'
import { useState } from 'react'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser'
import ThemedWarning from '../../components/ThemedWarning'


const Login = () => {

    //Need to fix the login/signup error logging
     
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    const [email, setEmail] = useState('')  
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const { login} = useUser()


    const handleSubmit = async () => {
        setError(null)

        try{
            await login(email, password)

        } catch(error){
            setError(error)
            //console.log(error.message)
        }
    }

  return (
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <ThemedView style = {styles.container}>

    <Spacer/>
    <ThemedText style = {styles.title} title={true}>Login To Your Account</ThemedText>
    <Spacer/>

    <ThemedTextInput style = {{width: '80%',
    marginBottom: 20
    }} 
    placeholder = 'Email' 
    keyboardType = 'email-address'
    onChangeText = {setEmail}
    value = {email}
    autoCapitalize = 'none'
    autoComplete = 'off'
    autoCorrect = {false}
    />

    <ThemedTextInput style = {{width: '80%',
    marginBottom: 20
    }} 
    placeholder = 'Password' 
    onChangeText = {setPassword}
    value = {password}
    secureTextEntry={true}
    autoCapitalize = 'none'
    autoComplete = 'off'
    autoCorrect = {false}
    />
   
   
   
    <ThemedButton onPress={handleSubmit} value={'Login'}>
    </ThemedButton>

    <Spacer/>

    {error && <ThemedWarning message = {error.message}/>}



    <Spacer height = {100}/>
    <Link href={'/register'}>
    <ThemedText style = {{textAlign: 'center'}}>Register Instead</ThemedText>
    </Link>

     </ThemedView>
     </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 30,
        textAlign: "center"
    }
})