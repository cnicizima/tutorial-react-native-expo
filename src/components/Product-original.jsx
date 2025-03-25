import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image'

export default function Product(props) {
    return (
        <View style={styles.container}>
                <Image
                    source={props.product}
                    style={styles.product}
                />
                <Text style={styles.descricao}>{props.descricao}</Text>
                <Text style={styles.preco}>{props.preco}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#DDD',
        borderRadius: 10,
        alignItems: "center",
        width: 180
    },

    product: {
        height: 150,
        width: 150,
        borderRadius: 10,
    },
    descricao: {
        fontFamily: 'Verdana',     
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
    },
    preco: {
        fontFamily: 'Verdana',  
        fontSize: 14,
        color: 'green',    
        paddingTop: 5,
    },
})

