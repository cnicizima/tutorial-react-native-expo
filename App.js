import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
// importa algo from biblioteca react-native

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá Mundo React Native (EXPO)</Text>
      <StatusBar style="auto" />
      {/* StatusBar é a barra na parte de cima do celular onde tem a hora, bateria, rede, etc */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
