import { View, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';


const ThemedView = ({ style, ...props }) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[{backgroundColor: theme.background, color: theme.text }, style]} {...props} /> // when you have self closing tag, you don't need to add children

    // The same as above
    // <View style={[{backgroundColor: theme.background}, style]} {...props}> 
    //     {children}
    // </View>
  )
}

export default ThemedView