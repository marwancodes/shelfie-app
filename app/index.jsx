import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import Logo from '../assets/img/logo_light.png';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View style={styles.container}>
      
      <Image source={Logo} style={styles.logo} />

      <Image
        style={{ width: 300, height: 200, borderRadius: 10, marginBottom: 50 }} 
        source={{ uri: 'https://images.wallpapersden.com/image/ws-alps-mountain-5k-dolomites_90583.jpg'}}
      />

      <Text style={styles.title}>Hello React Native</Text>
      <Text style={styles.subTitle}>Best App in 2025.</Text>

      <Link href="/about" style={styles.btn}>About</Link>
      <Link href="/contact" style={styles.btn}>Contact</Link>

      <View style={styles.card}>
        <Text>This is Card No 1</Text>
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#90e0ef',
    },
    subTitle: {
        marginTop: 10,
        fontSize: 16,
    },
    card: {
        marginTop: 20,
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0,0,0,0.1)',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    btn: {
        marginTop: 20,
        fontSize: 16,
        color: '#fff',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#6a4c93',
        width: 100,
        textAlign: 'center',
        boxShadow: '4px 4px rgba(0,0,0,0.1)',
        textTransform: 'uppercase',
    },
})