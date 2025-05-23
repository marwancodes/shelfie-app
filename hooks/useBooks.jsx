import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

export const useBooks = () => {
    const context = useContext(BooksContext); // to grab all the values from the context (books, fetchBooks, fetchBookById, createBook, deleteBook)

   if (!context) {
        throw new Error("useBooks must be used within a BooksProvider");
    }
    // this will throw an error if the context is not used within the provider, this is a good practice to avoid errors in the app

    return context;
}