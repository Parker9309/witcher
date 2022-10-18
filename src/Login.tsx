import React from 'react';
import { ImageBackground, Text } from 'react-native';
import { styles } from '../styles'


const imagePath = require('./assets/images/inside-dungeon.jpg');

export default function Login() {
  return (
    <ImageBackground source={imagePath} resizeMode="cover" style={styles.backgroundImage}>
      <Text style={styles.title}>ENTRAR</Text>
    </ImageBackground>
  )
}