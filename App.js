/** React & React Native */
import { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

/** React Navigation */
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './navigators/MainTab';

/** Redux */
import { Provider } from 'react-redux';
import store from './store';

/** Expo */
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

/** Main Component */
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        ...Ionicons.font,
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </Provider>
  );
}
