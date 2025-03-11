import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

export default function Card(props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.boxTexto}>
          <Text style={styles.texto}>{props.message}</Text>
        </View>
        <Image style={styles.avatar} source={props.avatar} />
      </View>
      <Text>{props.horario}</Text>
    </View>
  );
}

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

// export default function Card({avatar, children}) {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.texto}>{children}</Text>
//             </View>
//             < Image
//                 style={styles.avatar}
//                 source={avatar}
//             />
//         </View>
//     )}
{/* <Card avatar='https://github.com/cnicizima.png'>"olá tudo bem"</Card> o que está entre as tags é o children */}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginLeft: "20%",
  },
  box: {
    flexDirection: "row",
    marginVertical: 8,
    width: "100%"
  },
  boxTexto: {
    border: "1px solid black",
    borderRadius: 15,
    backgroundColor: "#EEEEEE",
    padding: 16,
    width: "70%",
  },
  texto: {
    fontSize: 16,
    fontWeight: 500,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginTop: 2,
    marginLeft: 8
  },
});
