import { Image } from "expo-image";
import { View, StyleSheet, Text } from "react-native";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source="https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
      />
      <Text>Meu logo</Text>
    </View>
  );
}

//No native, usa o css interno no componente, nao tem css externo. 
// precisa importar o StyleSheet do react-native

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 40
    },
    logo:{
        width: 80,
        height: 90,
        marginBottom: 40,
        backgroundColor: 'whitesmoke'
    }
})

// se exportar com export default, a importaçao é direto com o nome import Funcao,
// se exportar só com export, a importaçao é entre chaves. import { Funcao } . Entre chave pode exportar mais de uma funçao de uma vez, mas nao é a ideia pq a ideia é componentizar e ter um arquivo por funcao
