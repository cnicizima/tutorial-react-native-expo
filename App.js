import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { Image } from 'expo-image';
// importa algo from biblioteca react-native
import Logo from './src/components/Logo';
// importa o componente logo, exportado com export default.

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Text style={styles.titulo}>Olá Mundo React Native (EXPO)</Text>
      <Text style={styles.subtitulo}>Descrição do APP Cores</Text>
      <StatusBar style="auto" />
      {/* StatusBar é a barra na parte de cima do celular onde tem a hora, bateria, rede, etc */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: '18px',
    fontWeight: 'bold'
  },
  subtitulo:{
    color: 'red',
    fontStyle: 'italic',
    margin: 50,
    fontWeight: 'bold',
    fontSize: 30
  },
});
