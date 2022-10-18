import React from 'react';
import { ImageBackground, Text } from 'react-native';
import { styles } from '../styles'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const imagePath = require('./assets/images/inside-dungeon.jpg');

const stack = createNativeStackNavigator()


export default function Login() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <ImageBackground source={imagePath} resizeMode="cover" style={styles.backgroundImage}>
          <stack.Screen name="register" component={Forms}>
            <Text style={styles.title}>ENTRAR</Text>
          </stack.Screen>
        </ImageBackground>
      </stack.Navigator>
    </NavigationContainer>
  )
}
