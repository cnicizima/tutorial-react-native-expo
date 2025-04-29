import { Image } from "expo-image";
import { View, StyleSheet, Text, Pressable, Alert } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useUsersStore } from "../stores/useUsersStore"
import { useRouter } from "expo-router";

export default function CardUser({id, avatar, name, email}) {
    const { deleteUser: deleteUserStore, setUserToEditId  } = useUsersStore()
    const router = useRouter()

    const deleteUser = async () => {
        const result = await fetch(`http://localhost:3000/user/${id}`, {
            method: 'DELETE'
        })
        if(result.ok) {
            const data = await result.json()
            console.log(data)
            deleteUserStore(id)
        } else {
            const error = await result?.json()
            console.log('Erro ao deletar usuário', error?.message)
            Alert.alert('Erro ao deletar usuário', error?.message || '')
        }
    }

    const editUser = async () => {
        setUserToEditId(id)
        router.push('/edit')
    }

    return (
        <View style={styles.card}>
            <Image 
                source={{ uri: avatar }}
                style={styles.avatar}
                contentFit="cover"
            />
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
            <View style={styles.actions}>
                <Pressable onPress={editUser}>
                    <FontAwesome name="edit" size={24} color="#4287f5" />
                </Pressable>
                <Pressable onPress={deleteUser}>
                    <FontAwesome name="trash" size={24} color="#f54242" />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    info: {
        flex: 1,
        marginLeft: 16,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
        color: '#666',
    },
    actions: {
        flexDirection: 'row',
        gap: 16,
    }
});