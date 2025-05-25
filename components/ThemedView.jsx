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

  const insets = useSafeAreaInsets(); // This hook returns the safe area insets for the current device, it can be used to add padding to the top and bottom of the view
  // This is useful for devices with notches or rounded corners, it will add padding to the top and bottom of the view to avoid the notch or rounded corners

  return (
        <View 
          style={[
            baseStyle,{
             backgroundColor: theme.background,
             paddingTop: insets.top,
             paddingBottom: insets.bottom,
            }, style]} 
          {...props}
        />
  )

}

export default ThemedView