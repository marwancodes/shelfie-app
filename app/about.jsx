import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
import React from 'react';
import { Link } from 'expo-router';
import { Colors } from '../constants/Colors';



const about = () => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background, color: theme.text }]}>

      <Text style={styles.title}>About</Text>

      <Image
            style={{ width: 300, height: 200, borderRadius: 10, marginBottom: 50 }} 
            source={{ uri: 'https://images.doclify.net/bayswater-web/d/ea5386d8-cc97-4589-bafd-e76f1003a918.png?enlarge=0&format=webp&w=500'}}
        />

      <Link href="/" style={styles.btn}>Back Home</Link>
      
    </View>
  )
}

export default about

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