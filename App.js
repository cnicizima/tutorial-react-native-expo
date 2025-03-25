import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text, TextInput, Button } from 'react-native';
import Header from './src/components/Header';
import CardProduct from './src/components/CardProduct';
import { useState, useEffect } from 'react';


export default function App() {

  const [products, setProducts] = useState([])

  const [name, setName] = useState('')
  const [preco, setPreco] = useState('')
  const [tipo, setTipo] = useState('')
  const [imagem, setImagem] = useState('')

  const [productToEdit, setProductToEdit] = useState(null)

  //useEffect é um hook que executar a função fetchProducts assim quando o componente for renderizado
  useEffect(() => { //useEffect nao pode ser async por definiçao, por isso criamos uma array function para receber a funçao async await, pq fetch é async

    const fetchProducts = async () => {
      const result = await fetch('http://localhost:3000/product/list')
      const data = await result.json() //pegando o array e transformando em json
      console.log(data)
      setProducts(data) // funçao que vai alterar o estado do array vazio products pelo que contem objetos da array data que vem do fetch. Vai setar o 'products' com a data que veio do backend.
    }
    fetchProducts()
  }, [])


  //aqui, o useEffect observa o [productToEdit] e qdo ele é alterado, dispara a função
  useEffect(() => {
    console.log('productToEdit', productToEdit)
    if (productToEdit !== null) {
      const product = products.find((product) => product.id === productToEdit)
      setName(product.name)
      setPreco(product.preco)
      setTipo(product.tipo)
      setImagem(product.imagem)
    }
  }, [productToEdit])



  const handleCreateProduct = async () => {
    const result = await fetch('http://localhost:3000/product/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' //informa ao backend que está enviando os dados em json
      },
      body: JSON.stringify({ //transforma o objeto em json (fazer uma string json)
        name,
        preco,
        tipo,
        imagem
      })
    })
    const data = await result.json()
    console.log(data)
    setProducts([...products, data.product]) // adiciona um novo usuario no final do array. '...products' significa que sao todos os usuarios do array. se quiser acrescentar no inicio da lista, seria so inverter ( data.product, ...products)
    setName('')
    setPreco('')
    setTipo('')
    setImagem('') //limpa os campos do formulario apos o cadastro
  }

  const handleEditProduct = async () => {
    const result = await fetch(`http://localhost:3000/product/${productToEdit}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' //informa ao backend que está enviando os dados em json
      },
      body: JSON.stringify({ //transforma o objeto em json (fazer uma string json)
        name,
        preco,
        tipo,
        imagem
      })
    })
    //aqui, pegamos a data que vem do backend, percorremos o array products, criando umnovo array chamado productsEditado, substituindo apenda o usuario editado, o restante retorna o mesmo
    const data = await result.json()
    console.log(data)
    const productsEditado = products.map((product) => {
      if (product.id === productToEdit) {
        return data.product
      }
      return product
    })
    //aqui, setamos o array products com o novo array productsEditado
    setProducts(productsEditado)
    setName('')
    setPreco('')
    setTipo('')
    setImagem('') //limpa os campos do formulario apos o cadastro
    setProductToEdit(null)
  }



  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.listProduct}>
        {
          products.map((product) => { //products ja esta com os dados do fetch, entao podemos usar o map para percorrê-lo. Os dados em cada laço serão guardados em 'product', por isso podemos chamar product.id, etc.
            return <CardProduct
              key={product.id} //o map no react sempre vai precisar de uma key para identificar cada elemento para ele poder se referenciar na hora de montar um card
              name={product.name}
              imagem={product.imagem}
              preco={product.preco}
              tipo={product.tipo}
              id={product.id}
              products={products} //tipoando o array de usuarios para o componente CardProduct
              setProducts={setProducts} //tipoando a funçao setProducts para o componente CardProduct
              setProductToEdit={setProductToEdit}
            />
          }
          )}
      </View>
      <View>
        <Text style={styles.h1}>Cadastrar</Text>
        <TextInput style={styles.input} placeholder='Nome' value={name} onChangeText={setName}></TextInput>
        <TextInput style={styles.input} placeholder='Preco' value={preco} onChangeText={setPreco}></TextInput>
        <TextInput style={styles.input} placeholder='Tipo' value={tipo} onChangeText={setTipo}></TextInput>
        <TextInput style={styles.input} placeholder='Imagem' value={imagem} onChangeText={setImagem}></TextInput>
        <View style={styles.boxButtons}>
          <Button title='Cadastrar' onPress={ handleCreateProduct } />
          <Button title='Editar' onPress={ handleEditProduct } />
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
  listProduct: {
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
