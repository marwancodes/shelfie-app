import { Image, View, useColorScheme } from 'react-native';



const ThemedCard = ({ style, ...props }) => {

    const colorScheme = useColorScheme();
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo ; // this will set the logo to the current color scheme of the device, if its not found it will set it to light

  return (
    <Image source={logo} />

  )
}

export default ThemedCard;

const styles = {
    card: {
        marginTop: 20,
        borderRadius: 5,
    },
}