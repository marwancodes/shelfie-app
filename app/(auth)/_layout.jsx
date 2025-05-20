import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { useUser } from '../../hooks/useUser';
import GuestOnly from '../../components/auth/GuestOnly';


const AuthLayout = () => {

    const { user } = useUser();
    console.log(user); // this will log the user object, if its null it means the user is not logged in

  return (
    <GuestOnly>
    
        <StatusBar style="auto" />
        <Stack screenOptions={{ headerShown: false, animation: "none" }} />
        
    </GuestOnly>
  )
}

export default AuthLayout;