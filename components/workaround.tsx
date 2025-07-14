import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function Workaround() {
  const colorScheme = useColorScheme();
  const native = Gesture.Native();

  const pan = Gesture.Pan().blocksExternalGesture(native);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView>
        <GestureDetector gesture={pan}>
          <View style={styles.pagerWrapper}>
            <GestureDetector gesture={native}>
              <PagerView 
              style={styles.pagerView} 
              scrollEnabled={false}>
                {["red", "green", "blue"].map((color ) =>{
                const style ={backgroundColor: color, flex: 1}
                return (
                    <View style={style} key={color} />
                )
                })}

              </PagerView>
            </GestureDetector>
          </View>
        </GestureDetector>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}



const styles = StyleSheet.create({
  pagerWrapper: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
  },
});
