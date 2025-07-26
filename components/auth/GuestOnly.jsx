import { useRouter } from "expo-router"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"
import { Text } from "react-native"

const GuestOnly = ({children}) => {
    const {user, authChecked} = useUser()

    const router = useRouter()

    useEffect(() => {
    if (authChecked && user !== null){
        router.replace('/profile')

        }
    if (authChecked && !null){
            
        }
    if (!authChecked && user){
        <Text>Loading</Text>
        }
        
    }, [user, authChecked])

    return children


}

export default GuestOnly