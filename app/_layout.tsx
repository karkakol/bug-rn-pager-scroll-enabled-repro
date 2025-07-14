import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useRef, useState } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function RootLayout() {

  const viewPagerRef = useRef<PagerView | null>(null);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);



  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <PagerView 
      style={{flex: 1}} 
      scrollEnabled={false}>
        {["red", "green", "blue"].map((color ) =>{
          const style ={backgroundColor: color, flax: 1}
          return (
            <View style={style} key={color} />
          )
        })}

      </PagerView>
    </ThemeProvider>
  );
}
