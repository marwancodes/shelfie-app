import { createContext, useEffect, useState } from 'react';
import { databases, client } from "../lib/appwrite";
import { ID, Permission, Query, Role } from 'react-native-appwrite';
import { useUser } from '../hooks/useUser';

const DATABASE_ID = '683047a8000485d30820';
const COLLECTION_ID = '6830487800191a376e50';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {

    const [books, setBooks] = useState([]);
    const { user } = useUser();
    // This will get the user from the UserContext
    
    const fetchBooks = async () => {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [
                    Query.equal('userId', user.$id),
                ]
            )
            setBooks(response.documents);
            // This will set the books to the response from the database
            console.log(response.documents);
        } catch (error) {
            console.error(error.message);
        }
    }

    const fetchBookById = async (bookId) => {
        try {
            
        } catch (error) {
            console.error(error.message);
        }
    }

    const createBook = async (data) => {
        try {
            await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data, userId: user.$id},
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                ]
            )
        } catch (error) {
            console.log(error.message)
        }
    }

    const deleteBook = async (bookId) => {
        try {
            
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        // listens to changes in the database from Appwrite
        let unsubscribe
        const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;

        if (user) {
            fetchBooks();

            unsubscribe = client.subscribe(channel, (response) => {
                const { events, payload } = response;

                if (events[0].includes('create')) {
                    setBooks((prevBooks) => [...prevBooks, payload]);
                    // This will add the new book to the books array
                }
            })
        } else {
            setBooks([]);
        }

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        }   
    },[user])

    return (
        <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>
            {children}
        </BooksContext.Provider>
    )
}