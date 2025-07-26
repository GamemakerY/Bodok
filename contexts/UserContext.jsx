import { createContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { ID } from "react-native-appwrite";
import { account } from "../lib/appwrite";

export const UserContext = createContext()


export function UserProvider({ children }){

    const [user, setUser] = useState()
    const [authChecked, setAuthChecked] = useState(false)
 
    async function login(email, password){
        try{await account.createEmailPasswordSession(email, password);
            const response = await account.get()
            setUser(response)}

        catch(error){
            console.log(error)
            throw Error(error)
        }
            

    }

    async function register(email, password){
        try{
            await account.create(ID.unique(),  email, password)
            await login(email, password)
        } catch(error){
            throw Error(error)
        }

    }
    async function logout(){
        await account.deleteSession('current')
        console.log('User logged out.')
        setUser(null)
    }

    async function getInitialUserValue(){
        try{
            const response = await account.get()
            setUser(response)
        } catch(error){
            setUser(null)
        } finally{
            setAuthChecked(true)
            console.log('User is checked.')
        }
    }

    useEffect(()=>{
        getInitialUserValue()
    },[])

    return(
        //Need not use .Provider apparently? Change it later
        <UserContext.Provider value={{user, login, register, logout, authChecked}}>
            {children}
        </UserContext.Provider>
    )
}