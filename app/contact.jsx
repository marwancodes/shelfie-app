import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import { Link } from 'expo-router';

const contact = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Contact</Text>

      <Image
            style={{ width: 300, height: 200, borderRadius: 10, marginBottom: 50 }} 
            source={{ uri: 'https://img.freepik.com/free-photo/people-working-call-center_23-2149288184.jpg?semt=ais_hybrid&w=740'}}
        />

      <Link href="/" style={styles.btn}>Back Home</Link>
      
    </View>
  )
}

export default contact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6a4c93',
        marginBottom: 20,
    },
    btn: {
        marginTop: 20,
        fontSize: 16,
        color: '#6a4c93',
        borderBottomWidth: 1,
    },
})