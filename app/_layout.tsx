import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Platform, StatusBar, View } from 'react-native';

import 'react-native-reanimated';

// Evita que la pantalla de carga se oculte antes de tiempo
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Cargamos la fuente aquí
  const [loaded, error] = useFonts({
    'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync(); // Ocultamos la pantalla de carga cuando la fuente esté lista
    }
  }, [loaded, error]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync('black');
    }
  }, []);

  // Si la fuente no se ha cargado todavía, no mostramos nada
  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Slot />
      <StatusBar barStyle="light-content" />
    </View>
  );
}
