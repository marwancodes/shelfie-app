import { StyleSheet, Text } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { useBooks } from '../../../hooks/useBooks';

// Themed components
import ThemedText from '../../../components/ThemedText'
import ThemedView from '../../../components/ThemedView';
import ThemedButton from '../../../components/ThemedButton';
import Spacer from '../../../components/Spacer';
import ThemedCard from '../../../components/ThemedCard';
import ThemedLoader from '../../../components/ThemedLoader';

import { Colors } from '../../../constants/Colors';


const BookDetails = () => {

    const [book, setBook] = useState(null);

    const { id } = useLocalSearchParams();
    // Here you would typically fetch the book details using the id

    const { fetchBookById, deleteBook } = useBooks();

    const handleDelete = async () => {
        await deleteBook(id);
        // After deleting, you might want to redirect or show a success message
        setBook(null);
        // For example, you could redirect to the books list
        router.replace('/books');
    }

    // Fetch the book details when the component mounts or when the id changes
    useEffect(() => {
        const getBookData = async () => {
            const bookData = await fetchBookById(id);
            setBook(bookData);
        }
        getBookData();
    },[id]);

    // If the book is not found, you might want to handle that case
    if (!book) {
        return (
            <ThemedView safe={true} style={styles.container}>
                <ThemedLoader />
            </ThemedView>
        )
    }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Book description:</ThemedText>
        <Spacer height={10} />

        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>

      <ThemedButton onPress={handleDelete} style={styles.delete}>
        <Text style={{ color: '#fff', textAlign: 'center'}} >Delete Book</Text>
      </ThemedButton>

    </ThemedView>
  )
}

export default BookDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
  },
    title: {
        fontSize: 22,
        marginVertical: 10,
    },
    card: {
        margin: 20
  },
    delete: {
        marginTop: 40,
        marginLeft: 20,
        backgroundColor: Colors.warning,
        width: 200,
        alignSelf: "center",
  },
})