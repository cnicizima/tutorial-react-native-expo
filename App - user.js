import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text, TextInput, Button } from 'react-native';
import Header from './src/components/Header';
import CardUser from './src/components/CardUser';
import { useState, useEffect } from 'react';


export default function App() {

  const [users, setUsers] = useState([])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [avatar, setAvatar] = useState('')

  const [userToEdit, setUserToEdit] = useState(null)

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


  //aqui, o useEffect observa o [userToEdit] e qdo ele é alterado, dispara a função
  useEffect(() => {
    console.log('userToEdit', userToEdit)
    if (userToEdit !== null) {
      const user = users.find((user) => user.id === userToEdit)
      setName(user.name)
      setEmail(user.email)
      setPass(user.pass)
      setAvatar(user.avatar)
    }
  }, [userToEdit])



  const handleCreateUser = async () => {
    const result = await fetch('http://localhost:3000/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' //informa ao backend que está enviando os dados em json
      },
      body: JSON.stringify({ //transforma o objeto em json (fazer uma string json)
        name,
        email,
        pass,
        avatar
      })
    })
    const data = await result.json()
    console.log(data)
    setUsers([...users, data.user]) // adiciona um novo usuario no final do array. '...users' significa que sao todos os usuarios do array. se quiser acrescentar no inicio da lista, seria so inverter ( data.user, ...users)
    setName('')
    setEmail('')
    setPass('')
    setAvatar('') //limpa os campos do formulario apos o cadastro
  }

  const handleEditUser = async () => {
    const result = await fetch(`http://localhost:3000/user/${userToEdit}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' //informa ao backend que está enviando os dados em json
      },
      body: JSON.stringify({ //transforma o objeto em json (fazer uma string json)
        name,
        email,
        pass,
        avatar
      })
    })
    //aqui, pegamos a data que vem do backend, percorremos o array users, criando umnovo array chamado usersEditado, substituindo apenda o usuario editado, o restante retorna o mesmo
    const data = await result.json()
    console.log(data)
    const usersEditado = users.map((user) => {
      if (user.id === userToEdit) {
        return data.user
      }
      return user
    })
    //aqui, setamos o array users com o novo array usersEditado
    setUsers(usersEditado)
    setName('')
    setEmail('')
    setPass('')
    setAvatar('') //limpa os campos do formulario apos o cadastro
  }



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
              id={user.id}
              users={users} //passando o array de usuarios para o componente CardUser
              setUsers={setUsers} //passando a funçao setUsers para o componente CardUser
              setUserToEdit={setUserToEdit}
            />
          }
          )}
      </View>
      <View>
        <Text style={styles.h1}>Cadastrar</Text>
        <TextInput style={styles.input} placeholder='Nome' value={name} onChangeText={setName}></TextInput>
        <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={setEmail}></TextInput>
        <TextInput style={styles.input} placeholder='Senha' value={pass} onChangeText={setPass}></TextInput>
        <TextInput style={styles.input} placeholder='Avatar' value={avatar} onChangeText={setAvatar}></TextInput>
        <View style={styles.boxButtons}>
          <Button title='Cadastrar' onPress={ handleCreateUser } />
          <Button title='Editar' onPress={ handleEditUser } />
        </View>
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
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  input: {
    backgroundColor: '#AAA',
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    margin: 10,
  },
  boxButtons: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-around',
    maginBottom: 40
  }
});
