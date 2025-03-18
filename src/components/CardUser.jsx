import { Image } from 'expo-image';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';


export default function CardUser({ id, avatar, name, email }) {

    const deleteUser = async () => {
        const result = await fetch(`http://localhost:3000/user/${id}`, {
            method: 'DELETE'
        })
        const data = await result.json()
        console.log(data)
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
            <Pressable onPress={deleteUser} style={styles.trash}>
                <Octicons name="trash" size={24} color="black" />
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
        position: 'absotute',
        top: 10,
        rigth: 100
    }
})
