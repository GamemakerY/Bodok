import { StyleSheet } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { useUser } from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'

const Profile = () => {

  const {logout, user} = useUser()

  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style = {styles.heading}>Your Profile</ThemedText>
      <Spacer/>
      <ThemedText>Here is your Email: </ThemedText>

      <Spacer height={5}/>

      {user && <ThemedText>{user.email}</ThemedText>}
      
      <Spacer/>
      
    <ThemedButton onPress={logout} value={'Logout'}>
    </ThemedButton>

    </ThemedView>


  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAligh: 'center'
    }
})