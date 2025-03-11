import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
// import { Image } from 'expo-image';
// importa algo from biblioteca react-native
// import Logo from './src/components/Logo';
// importa o componente logo, exportado com export default.

import Header from './src/components/Header';
import Card from './src/components/Card';
import Product from './src/components/Product';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Card avatar='https://github.com/cnicizima.png' message='Olá a todos' horario='Enviada há 8 minutos atrás' />
      <Card avatar='https://github.com/m-shaka.png' message='Como vão?' horario='Enviada há 9 minutos atrás' />
      <Card avatar='https://github.com/renancavichi.png' message='Bem e vocês' horario='Enviada há 10 minutos atrás' />

      <View style={styles.productContainer}>
        <Product product='https://www.divvino.com.br/blog/wp-content/uploads/2020/03/vinhos-para-o-outono.jpg' descricao='Vinho' preco='R$4,50' />
        <Product product='https://www.portoaporto.com.br/blog/wp-content/uploads/2022/12/vinhos-ate-100-reais-natal.jpeg' descricao='Vinho' preco='R$4,50' />
        <Product product='https://www.divvino.com.br/blog/wp-content/uploads/2020/03/vinhos-para-o-outono-como-escolher.jpg' descricao='Vinho' preco='R$4,50' />
        <Product product='https://www.divvino.com.br/blog/wp-content/uploads/2020/03/vinhos-para-o-outono-como-escolher.jpg' descricao='Vinho' preco='R$4,50' />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  productContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 20,
    flexWrap: 'wrap',
    justifyContent: "center"
  }
});
