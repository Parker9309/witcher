import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import { styles } from '../../styles';

export default function BasicForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={ styles.container }>
      <View style={ styles.inputView }>
        <TextInput
          style={ styles.TextInput }
          placeholder="Email."
          placeholderTextColor="#363636"
          onChangeText={ (email) => setEmail(email) }
        />
      </View>

      <View style={ styles.inputView }>
        <TextInput
          style={ styles.TextInput }
          placeholder="Password."
          placeholderTextColor="#363636"
          secureTextEntry={ true }
          onChangeText={ (password) => setPassword(password) }
        />
      </View>
    </View>
  );
}