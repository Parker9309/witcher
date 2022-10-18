import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { onPressButton } from './src/buttons';
import { Login } from './src/Login'

const imagePath = require('./assets/images/rpg-door.jpeg');

export default function App() {
  let[fontsLoaded, error]=useFonts({
    "The-Witcher-Font": require('./assets/fonts/Thewitcher-jnOj.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ImageBackground source={imagePath} resizeMode="cover" style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>RPG Master</Text>
        <TouchableOpacity onPress={ onPressButton }>
          <Text style={styles.content}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.content}>Cadastrar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}
