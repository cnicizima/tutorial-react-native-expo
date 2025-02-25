import { View, StyleSheet, Text } from 'react-native';
import { Image } from 'expo-image'
import { Entypo } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
        <Image 
            source={'https://github.com/cnicizima.png'}
            style={styles.avatar}
        />
        <Text style={styles.nome}>Ciro Nicizima</Text>
        <Entypo name="menu" size={44} color="black" style={styles.menu} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        backgroundColor: '#EEEEEE',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    avatar: {
        height: 70,
        width: 70,
        borderRadius: 35
    },
    nome: {
        fontSize: 26
    },
    menu: {
        marginLeft: 'auto'
    }
})

//marginLeft auto faz com que o menu fique na direita da tela - usa o maximo da margem à esquerda, indo pra direita
