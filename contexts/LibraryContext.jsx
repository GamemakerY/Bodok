import { createContext, useContext, useEffect, useState } from "react";
import { Databases, ID, Permission, Query, Role } from "react-native-appwrite";
import { databases } from "../lib/appwrite";
import { useUser } from "../hooks/useUser";



export const LibraryContext = createContext()

const DATABASE_ID='688579090027bafc45df'
const COLLECTION_ID_BOOKS= '68857ec70002f29a2e35'
const COLLECTION_ID_LIBRARY='68857e0c000ebfe7cab1'


//const DATABASE_ID = 
//const COLLECTION_ID = 

export function LibraryProvider({children}){
    const [books, setBooks] = useState([])
    const [library, setLibrary] = useState()
    const [libraryCheck, setLibraryCheck] = useState()
    const [libraryExist, setLibraryExist] = useState()
    const [librarySelf, setLibrarySelf] = useState([])

    const {user} = useUser()

    async function checkLibrary(){
        try{
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID_LIBRARY,
                [
                    Query.equal('userID', user.$id)
                ]
            )

            if (response.total == 0){
                setLibraryExist(false)
            }
            else{
                setLibraryExist(true)
                setLibrarySelf(response.documents) 
            }

            console.log(libraryExist)


        } catch(error){
            console.log(error.message)
        }
    }

    async function createLibrary(data){
    try{
            const newLibrary = await databases.createDocument(DATABASE_ID, 
            COLLECTION_ID_LIBRARY, 
            ID.unique(),
            {...data, userID: user.$id },
        [
            Permission.read(Role.any()),
            Permission.update(Role.user(user.$id)),
            Permission.delete(Role.user(user.$id))
        ])
        
        } catch (error){
            console.log(error.message)
        }
    }


    async function createBook(data){
        try{
            const newLibrary = await databases.createDocument(DATABASE_ID, 
            COLLECTION_ID_BOOKS, 
            ID.unique(),
            {...data, userID: user.$id },
        [
            Permission.read(Role.any()),
            Permission.update(Role.user(user.$id)),
            Permission.delete(Role.user(user.$id))
        ])
        
        } catch (error){
            console.log(error.message)
        }
    }


    async function fetchLibraryByID(id){
    try{

    } catch (error){
            console.error(error.message)
        }
    }

    async function fetchBooks(){
        try{
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID_BOOKS,
                [
                    Query.equal('userID', user.$id)
                ]
            )

            setBooks(response.documents)
            
        }catch(error){
            console.log(error.message)
        }
    }



        

    
    async function fetchBookByID(data){
    try{

    } catch (error){
            console.error(error.message)
        }
    }

    async function deleteLibrary(id){
    try{

    } catch (error){
            console.error(error.message)
        }
    }


    async function deleteBook(id){
    try{

    } catch (error){
            console.error(error.message)
        }
    }

    useEffect(() => {
        if (user){
            fetchBooks()
            setLibraryCheck(true)
            checkLibrary()
            
        } else{
            setBooks([])
        }
    }, [user, library])

    //useEffect(()=>{
    //    setLibrarySelf()
    //}, [librarySelf])


    return (
        <LibraryContext.Provider value = {{library, books, createLibrary, createBook, fetchLibraryByID, fetchBookByID, deleteLibrary, deleteBook, checkLibrary, fetchBooks, setLibraryExist, libraryExist, librarySelf}}>
            {children}
        </LibraryContext.Provider>
    )




}