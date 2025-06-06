import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { useState } from 'react';

// themed components
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';
import { useUser } from '../../hooks/useUser';
// import ThemedLoader from '../../components/ThemedLoader';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const { login } = useUser();

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

        try {
            await login(email, password);
        } catch (error) {
            setError(error.message);
        }
    }

  return (
    // TouchableWithoutFeedback to dismiss keyboard instead of using a button
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>

        <ThemedText title={true} style={styles.title}>Login to Your Account</ThemedText>

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
            <Text style={{ color: '#f2f2f2' }}>Login</Text>
        </ThemedButton>

        <Spacer height={20}/>
        {error &&
            <ThemedText style={styles.error}>
                {error}
            </ThemedText>
        }

        <Spacer height={100}/>

        <Link href={"/register"}>
            <ThemedText style={{ textAlign: 'center' }}>Register Instead</ThemedText>
        </Link>

        {/* <ThemedLoader /> */}

        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

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
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8,
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