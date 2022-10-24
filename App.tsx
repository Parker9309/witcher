import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components';

import { Groups } from '@screens/Groups';
import { Loading } from '@components/Loading';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    "The-Witcher-Font": require('@assets/fonts/Thewitcher-jnOj.ttf'),
  });

  return (
    <ThemeProvider theme={ theme }>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Groups /> : <Loading /> }
    </ThemeProvider>
  );
}
