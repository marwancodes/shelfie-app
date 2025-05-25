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
                    Query.orderAsc('$createdAt'),
                ]
            )
            setBooks(response.documents);
            // This will set the books to the response from the database
            console.log(response.documents);
        } catch (error) {
            console.error(error.message);
        }
    }

    const fetchBookById = async (id) => {
        try {
            const response = await databases.getDocument(
                DATABASE_ID,
                COLLECTION_ID,
                id
            )
            return response;
            // This will return the book with the given id
            
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

            // Refresh the books again after creating a new book
            await fetchBooks();
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

        if (user) {
            fetchBooks();
        } else {
            setBooks([]);
        }
  
    },[user])

    return (
        <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>
            {children}
        </BooksContext.Provider>
    )
}