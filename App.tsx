import { StatusBar } from 'react-native';

import { Loading } from '@components/Loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { Routes } from '@routes/index';
import { THEME } from '@theme/index';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
