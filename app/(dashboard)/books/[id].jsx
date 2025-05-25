import { StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { useBooks } from '../../../hooks/useBooks';

// Themed components
import ThemedText from '../../../components/ThemedText'
import ThemedView from '../../../components/ThemedView';
import ThemedButton from '../../../components/ThemedButton';
import Spacer from '../../../components/Spacer';
import ThemedCard from '../../../components/ThemedCard';
import ThemedLoader from '../../../components/ThemedLoader';


const BookDetails = () => {

    const [book, setBook] = useState(null);

    const { id } = useLocalSearchParams();
    // Here you would typically fetch the book details using the id

    const { fetchBookById } = useBooks();

    useEffect(() => {
        const getBookData = async () => {
            const bookData = await fetchBookById(id);
            setBook(bookData);
        }
        getBookData();
    },[id]);

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
  }
})