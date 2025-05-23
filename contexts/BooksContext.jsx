import { createContext, useState } from 'react';
import { account } from "../lib/appwrite";

const DATABASE_ID = '683047a8000485d30820';
const COLLECTION_ID = '6830487800191a376e50';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {

    const [books, setBooks] = useState([]);
    
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
            
        } catch (error) {
            console.error(error.message);
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