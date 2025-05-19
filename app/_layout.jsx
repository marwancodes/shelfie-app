import { StyleSheet, Text, useColorScheme } from 'react-native'
import { Slot, Stack } from 'expo-router';
import { Colors } from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { UserProvider } from '../contexts/UserContext';


const RootLayout = () => {

    const colorScheme = useColorScheme(); // this hook its return the current color scheme of the device, it can be 'light' or 'dark'
    // console.log(colorScheme); // this will log the current color scheme of the device
    const theme = Colors[colorScheme] ?? Colors.light; // this will set the theme to the current color scheme of the device, if its not found it will set it to light



  return (
    <UserProvider>
        <StatusBar value="auto" />    
        
        {/* <Slot /> */}
        <Stack
            screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.iconColor,
            headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
          

            <Stack.Screen name="index" options={{  title: 'Home' }} />
            <Stack.Screen name="about" options={{ headerShown: false }} />
            <Stack.Screen name="contact" options={{ title: 'Contact' }} />

            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        
        </Stack>
        <Text>Footer</Text>
   
    </UserProvider>
  )
}

export default RootLayout;

const styles = StyleSheet.create({})