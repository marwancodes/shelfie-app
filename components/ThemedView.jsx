import { View, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const ThemedView = ({ style, safe = false, ...props }) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    const baseStyle = {
      backgroundColor: theme.background, 
      color: theme.text
    }
    
  if (!safe) return (
    <View style={[baseStyle, style]} {...props} /> // when you have self closing tag, you don't need to add children

    // The same as above
    // <View style={[{backgroundColor: theme.background}, style]} {...props}> 
    //     {children}
    // </View>
  )

  const insets = useSafeAreaInsets();

  return (
        <View 
          style={[
            baseStyle,{
             paddingTop: insets.top,
             paddingBottom: insets.bottom,
            }, style]} 
          {...props}
        />
  )

}

export default ThemedView