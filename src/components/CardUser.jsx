import { Image } from 'expo-image';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

//esta users e setUsers sao variaveis de app que sao passadas para o componente User.
export default function CardUser({ id, avatar, name, email, users, setUsers, setUserToEdit }) {

    const deleteUser = async () => {
        const result = await fetch(`http://localhost:3000/user/${id}`, {
            method: 'DELETE'
        })
        const data = await result.json()
        console.log(data)
        setUsers (users.filter((user) => user.id !== id))
        //funçao filter vai montar um novo array com todos os usuarios que nao tem o id que foi passado para a funçao deleteUser
        //e vai atualizar sozinho os cards renderizados no app
    }

    const editUser = async () => {
        setUserToEdit(id)
    }

    return (
        <View style={styles.card}>
            <Image
                style={styles.avatar}
                source={avatar}
            />
            <View style={styles.info}>
                <Text style={styles.nome}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
            <Pressable style={styles.trash} onPress={deleteUser}>
                <FontAwesome name="trash-o" size={24} color="black" />  
            </Pressable>
            <Pressable style={styles.edit} onPress={editUser}>
                <FontAwesome name="edit" size={24} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '80%',
        minWidth: 200,
        height: 90,
        backgroundColor: '#CCC',
        border: '1px solid #000',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        gap: 10
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#FFF'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    email: {
        color: '#999'
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
