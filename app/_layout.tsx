import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <PagerView style={{flex: 1}} scrollEnabled={false}>
        {["red", "green", "blue"].map((color ) =>{
          const style ={backgroundColor: color, flex: 1}
          return (
            <View style={style} key={color} />
          )
        })}

      </PagerView>
    </ThemeProvider>
  );
}
