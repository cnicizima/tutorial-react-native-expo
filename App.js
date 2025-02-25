import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// import { Image } from 'expo-image';
// importa algo from biblioteca react-native
// import Logo from './src/components/Logo';
// importa o componente logo, exportado com export default.

import Header from './src/components/Header';
import Card from './src/components/Card';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Card avatar='https://github.com/cnicizima.png' message='Olá a todos' horario='Enviada há 8 minutos atrás'/>
      <Card avatar='https://github.com/m-shaka.png' message='Como vão?' horario='Enviada há 9 minutos atrás'/>
      <Card avatar='https://github.com/renancavichi.png' message='Bem e vocês' horario='Enviada há 10 minutos atrás'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  }
});
