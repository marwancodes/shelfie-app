import { StyleSheet } from 'react-native'
import { Link } from 'expo-router';

// themed components
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';


const Register = () => {
  return (
    <ThemedView style={styles.container}>

      <ThemedText title={true} style={styles.title}>Register For An Account</ThemedText>

      <Spacer height={100}/>

      <Link href={"/login"}>
        <ThemedText style={{ textAlign: 'center' }}>Login Instead</ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Register

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