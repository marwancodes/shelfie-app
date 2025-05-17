import { View, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const ThemedView = ({ style, safe = true, ...props }) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    
  if (!safe) return (
    <View style={[{backgroundColor: theme.background, color: theme.text }, style]} {...props} /> // when you have self closing tag, you don't need to add children

    // The same as above
    // <View style={[{backgroundColor: theme.background}, style]} {...props}> 
    //     {children}
    // </View>
  )

  const insets = useSafeAreaInsets();

  return (
        <View 
          style={[{backgroundColor: theme.background,
             color: theme.text,
             paddingTop: insets.top,
             paddingBottom: insets.bottom,
            }, style]} 
          {...props}
        /> 
  )

}

export default ThemedView