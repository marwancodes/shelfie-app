import { StyleSheet ,View, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';



const ThemedCard = ({ style, ...props }) => {

    const colorScheme = useColorScheme();

    const theme = Colors[colorScheme] ?? Colors.light; // this will set the logo to the current color scheme of the device, if its not found it will set it to light

  return (
    <View 
      style={[{ backgroundColor: theme.uiBackground}, styles.card, style]}
      {...props}
    />
  )
}

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20
  }
})