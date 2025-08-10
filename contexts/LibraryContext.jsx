import { createContext, useContext, useEffect, useState } from "react";
import { Databases, ID, Permission, Query, Role } from "react-native-appwrite";
import { client, databases } from "../lib/appwrite";
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
    const [libraries, setLibraries] = useState([])
    const [viewBooks, setViewBooks] = useState([])
    const [viewLibrary, setViewLibrary] = useState([])

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

        setLibrarySelf((prevLibraries) => [...prevLibraries, newLibrary]);
        setLibraryExist(true)

        } catch (error){
            console.log(error.message)
        }
    }


    async function createBook(data){
        try{
            const newBook = await databases.createDocument(DATABASE_ID, 
            COLLECTION_ID_BOOKS, 
            ID.unique(),
            {...data, userID: user.$id },
        [
            Permission.read(Role.any()),
            Permission.update(Role.user(user.$id)),
            Permission.delete(Role.user(user.$id))
        ])

        setBooks((prevBooks) => [...prevBooks, newBook]);
        
        } catch (error){
            console.log(error.message)
        }
    }


    async function fetchLibraryByID(id){
        try{
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID_LIBRARY,
                [
                    Query.equal('userID', id)
                ]
            )

            setViewLibrary(response.documents)

        }catch(error){
            console.log(error.message)
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

    async function fetchLibraries(){
        try{
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID_LIBRARY
            )

            setLibraries(response.documents)
            
        }catch(error){
            console.log(error.message)
        }
    }



        

    
    async function fetchBookByID(id){
        try{
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID_BOOKS,
                [
                    Query.equal('userID', id)
                ]
            )

            setViewBooks(response.documents)
            
        }catch(error){
            console.log(error.message)
        }
    }

    async function deleteLibrary(id){
    try{

    } catch (error){
            console.log(error.message)
        }
    }


    async function deleteBook(id){
    try{

    } catch (error){
            console.log(error.message)
        }
    }

    useEffect(() => {

        console.log("running...")
        try{
        let unsubscribe
        const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID_LIBRARY}.documents`


        if (user){
            setLibraryCheck(true)
            checkLibrary()
            fetchBooks()
            fetchLibraries()
            
            unsubscribe = client.subscribe(channel, (response) => {
                const {payload, events} = response
                if (events[0].includes('create')){
                    setBooks((prevBooks)=>[...prevBooks, payload])
                }

            })
        } else{
            setBooks([])
            setLibraries([])
            setLibrarySelf([])
        }

        return () => {
            if (unsubscribe) unsubscribe()
        }
        } catch(error){
            console.log(error.message)
        }
    }, [user])


    return (
        <LibraryContext.Provider value = {{library, books, createLibrary, createBook, fetchLibraryByID, fetchBookByID, deleteLibrary, deleteBook, checkLibrary, fetchBooks, setLibraryExist, libraryExist, librarySelf, libraries, viewBooks, fetchBookByID, viewLibrary}}>
            {children}
        </LibraryContext.Provider>
    )




}