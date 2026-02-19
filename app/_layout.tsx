import * as NavigationBar from 'expo-navigation-bar';
import { Slot } from 'expo-router';
import { useEffect } from 'react';
import { Platform, StatusBar, View } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync('black');
    }
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Slot />
      <StatusBar barStyle="light-content" />
    </View>
  );
}
