
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from "expo-font";
import { Asset } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import LoggedOutNav from './navigators/LoggedOutNav';

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false)
  const preload = async() => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font: any) => Font.loadAsync(font));
    const imagesToLoad = [
      require("./assets/logo.png"),
      "https://cdn.iconscout.com/icon/premium/png-512-thumb/ice-coffee-1-642893.png",
    ];
    const imagePromises = imagesToLoad.map((image: any) => Asset.loadAsync(image));
    await Promise.all([fontPromises, imagePromises]);
  }
  if (loading) {
    return (
      <AppLoading 
        startAsync={preload}
        onError={console.warn} 
        onFinish={onFinish}
      />
    );
  }
  return (
    <NavigationContainer>
      <LoggedOutNav />
    </NavigationContainer>
  );
}
