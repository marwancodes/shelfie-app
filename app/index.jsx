import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import Logo from '../assets/img/logo_light.png';
import { Link } from 'expo-router';
// ThemedView component is used to set the background color of the view according to the current color scheme
import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';


const Home = () => {
  return (
    <ThemedView style={styles.container}>
      
      <ThemedLogo style={styles.logo} />
      
      <Spacer />

      <Image
        style={{ width: 300, height: 200, borderRadius: 10, marginBottom: 50 }} 
        source={{ uri: 'https://images.wallpapersden.com/image/ws-alps-mountain-5k-dolomites_90583.jpg'}}
      />

      <ThemedText style={styles.title}>Hello React Native</ThemedText>
      <Text style={styles.subTitle}>Best App in 2025.</Text>

      <Spacer />


      <Link href="/about" style={styles.btn}>About</Link>
      <Link href="/contact" style={styles.btn}>Contact</Link>
      <Link href="/login" style={styles.link}><ThemedText>Login</ThemedText></Link>

      <View style={styles.card}>
        <Text>This is Card No 1</Text>
      </View>

    </ThemedView>
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
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    },
})