import { createContext, useState } from 'react';
import { databases } from "../lib/appwrite";
import { ID, Permission, Role } from 'react-native-appwrite';
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


    return (
        <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>
            {children}
        </BooksContext.Provider>
    )
}