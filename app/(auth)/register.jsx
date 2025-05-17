import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router';
import { useState } from 'react';

// themed components
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log('Register button pressed', email, password);
    }

  return (
    // TouchableWithoutFeedback to dismiss keyboard
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
        <ThemedView style={styles.container}>

        <ThemedText title={true} style={styles.title}>Register For An Account</ThemedText>

        <Spacer />
        <ThemedTextInput
            style={{ marginBottom: 20, width: "80%" }}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
        />

        <ThemedTextInput
            style={{ marginBottom: 20, width: "80%" }}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            />

        <ThemedButton onPress={handleSubmit}>
            <Text style={{ color: '#f2f2f2' }}>Register</Text>
        </ThemedButton>

        <Spacer height={100}/>

        <Link href={"/login"}>
            <ThemedText style={{ textAlign: 'center' }}>Login Instead</ThemedText>
        </Link>

        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 30,
    },
    
});