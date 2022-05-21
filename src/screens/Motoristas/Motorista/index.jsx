import { Text, View, StyleSheet} from "react-native"

export default function Motorista(props) {
    console.log(props.route.params)
   const { nome, CNH, categoria } = props.route.params
   
    return(
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.boxTitulo}>
                    <Text style={styles.titulo}>Nome:{nome}</Text>
                </View>
                <View style={styles.boxDetalhes}>
                    <Text style={styles.texto}>CNH:{CNH}</Text>
                    <Text style={styles.texto} >Categoria:{categoria}</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    page:{
        display: "flex",
        marginTop: "50%",

    },
    container: {
        backgroundColor: "#5252bc",
        margin: 8,
        padding: 10,
        borderRadius: 16,
    },
    boxTitulo:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    titulo:{
        color: "#FFF",
        fontSize: 32,
        padding: 8,
    },
    boxDetalhes:{
        marginTop: 20,
        justifyContent: "center",
    },
    texto: {
        margin: 4,
        color: "#FFF",
        fontSize: 20,
        backgroundColor: "#0b0bef",
        borderRadius: 16,
        padding: 8,
    }
});

