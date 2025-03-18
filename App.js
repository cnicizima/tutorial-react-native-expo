import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './src/components/Header';
import CardUser from './src/components/CardUser';
import { useState, useEffect } from 'react';


export default function App() {

  const [users, setUsers] = useState([])

  //useEffect é um hook que executar a função fetchUsers assim quando o componente for renderizado
  useEffect(() => { //useEffect nao pode ser async por definiçao, por isso criamos uma array function para receber a funçao async await, pq fetch é async

    const fetchUsers = async () => {
      const result = await fetch('http://localhost:3000/user/list')
      const data = await result.json() //pegando o array e transformando em json
      console.log(data)
      setUsers(data) // funçao que vai alterar o estado do array vazio users pelo que contem objetos da array data que vem do fetch. Vai setar o 'users' com a data que veio do backend.
    }
    fetchUsers()
  }, [])

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.listUser}>
        {
          users.map((user) => { //users ja esta com os dados do fetch, entao podemos usar o map para percorrê-lo. Os dados em cada laço serão guardados em 'user', por isso podemos chamar user.id, etc.
            return <CardUser
              key={user.id} //o map no react sempre vai precisar de uma key para identificar cada elemento para ele poder se referenciar na hora de montar um card
              name={user.name}
              avatar={user.avatar}
              email={user.email}
            />
          }
          )}
      </View>
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
  },
  listUser: {
    gap: 20,
    marginVertical: 20,
    alignItems: 'center'
  }
});
