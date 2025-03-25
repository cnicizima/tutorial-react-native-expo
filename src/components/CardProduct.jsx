import { Image } from 'expo-image';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

//esta products e setProducts sao variaveis de app que sao passadas para o componente Product.
export default function CardProduct({ id, imagem, name, tipo, products, preco, setProducts, setProductToEdit }) {

    const deleteProduct = async () => {
        const result = await fetch(`http://localhost:3000/product/${id}`, {
            method: 'DELETE'
        })
        const data = await result.json()
        console.log(data)
        setProducts (products.filter((product) => product.id !== id))
        //funçao filter vai montar um novo array com todos os usuarios que nao tem o id que foi passado para a funçao deleteProduct
        //e vai atualizar sozinho os cards renderizados no app
    }

    const editProduct = async () => {
        setProductToEdit(id)
    }

    return (
        <View style={styles.card}>
            <Image
                style={styles.imagem}
                source={imagem}
            />
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.tipo}>{tipo}</Text>
                <Text style={styles.preco}>${preco}</Text>
            </View>
            <Pressable style={styles.trash} onPress={deleteProduct}>
                <FontAwesome name="trash-o" size={24} color="black" />  
            </Pressable>
            <Pressable style={styles.edit} onPress={editProduct}>
                <FontAwesome name="edit" size={24} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '80%',
        minWidth: 200,
        height: 120,
        backgroundColor: '#CCC',
        border: '1px solid #000',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        gap: 10
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#FFF',
        marginTop: '10px'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: "-10px"
    },
    preco: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 10
    },
    tipo: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10
    },
    info: {
        gap: 2,
        marginTop: 14
    },
    trash: {
        position: 'absolute',
        right: 20,
        top: 12
    },
    edit: {
        position: 'absolute',
        right: 60,
        top: 14
    }
})
