import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router';
import { Colors } from '../constants/Colors';


const RootLayout = () => {

    const colorScheme = useColorScheme(); // this hook its return the current color scheme of the device, it can be 'light' or 'dark'
    // console.log(colorScheme); // this will log the current color scheme of the device
    const theme = Colors[colorScheme] ?? Colors.light; // this will set the theme to the current color scheme of the device, if its not found it will set it to light



  return (
    <View style={{ flex: 1, }}>
      {/* <Slot /> */}
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.iconColor,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >

        <Stack.Screen name="index" options={{ headerShown: false, title: 'Home' }} />
        <Stack.Screen name="about" options={{ headerShown: false }} />
        <Stack.Screen name="contact" options={{ title: 'Contact' }} />

      </Stack>
      <Text>Footer</Text>
    </View>
  )
}

export default RootLayout;

const styles = StyleSheet.create({})