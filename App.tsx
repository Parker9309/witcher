import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const imagePath = require('./assets/images/rpg-door.jpeg');

const COLORS = {
  TITLE: "#FFC700",
  BACKGROUND: "#363636"
}

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
        <Text style={styles.content}>Entrar</Text>
        <Text style={styles.content}>Cadastrar</Text>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    color: COLORS.TITLE,
    fontSize: 80,
    fontFamily: "The-Witcher-Font",
    jutifyContent: "flex-start",
    marginTop: 70,
    marginBottom: 310,
    paddingBottom: 100,
    textAlign: "center"
  },
  content: {
    alignSelf: "center",
    backgroundColor: COLORS.BACKGROUND,
    borderRadius: 8,
    color: COLORS.TITLE,
    fontFamily: "The-Witcher-Font",
    fontSize: 30,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    paddingBottom: 7
  },
  backgroundImage: {
    flex: 1
  },
});
