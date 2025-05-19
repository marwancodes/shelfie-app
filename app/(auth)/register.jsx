import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router';
import { useState } from 'react';
import { Colors } from '../../constants/Colors';

// themed components
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';
import { useUser } from '../../hooks/useUser';


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const { register } = useUser();
    
    const handleSubmit = async () => {
        setError(null);
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }
        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }
        if (!email.includes('@')) {
            setError("Please enter a valid email");
            return;
        }
        try {
            await register(email, password);
        } catch (error) {
            setError(error.message);
        }
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

        <Spacer height={20}/>
        {error &&
            <ThemedText style={styles.error}>
                {error}
            </ThemedText>
        }

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
    error: {
            color: Colors.warning,  
            padding: 10, 
            backgroundColor: '#f5c1c8', 
            borderColor: Colors.warning,
            borderWidth: 1,
            borderRadius: 6,
            marginHorizontal: 10
    },
    
});