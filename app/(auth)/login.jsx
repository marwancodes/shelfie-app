import { StyleSheet } from 'react-native'
import { Link } from 'expo-router';

// themed components
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';


const Login = () => {
  return (
    <ThemedView style={styles.container}>

      <ThemedText title={true} style={styles.title}>Login To Your Account</ThemedText>

      <Spacer height={100}/>

      <Link href={"/register"}>
        <ThemedText style={{ textAlign: 'center' }}>Register Instead</ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 30,
    },
    
});