import { View, StyleSheet, Text } from "react-native";
import { Image } from 'expo-image';

export default function Card(props) {
    return (
        <View style={styles.container}>
            <View style={styles.boxTexto}>
            <Text style={styles.texto}>{props.message}</Text>
            </View>
            < Image 
                style={styles.avatar}
                source={props.avatar}
                />
                <Text>{props.horario}</Text>
        </View>
    )}

    // export default function Card({avatar, message}) {
    //     return (
    //         <View style={styles.container}>
    //             <View style={styles.boxTexto}>
    //             <Text style={styles.texto}>{message}</Text>
    //             </View>
    //             < Image 
    //                 style={styles.avatar}
    //                 source={avatar}
    //             />
    //         </View>
    //     )}
    //passando com chaves na função, sem usar props.
 
const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
            gap: 16
        },
        boxTexto: {
            padding: 16,
            width: '70%',
            border: '1px solid black',
            borderRadius: 15,
            backgroundColor: '#EEEEEE', 
        }, 
        texto: {
             fontSize: 16,
             fontWeight: 500  
        },   
        avatar: {
            height: 30,
            width: 30,
            borderRadius: 15,
            marginTop: 2
        }
    })