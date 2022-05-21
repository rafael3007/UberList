
import { Text,View,TouchableOpacity, StyleSheet,  } from "react-native"
import { SafeAreaView } from "react-native"


export default function Home({navigation}) {
    return(
        <SafeAreaView >
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.push('Motoristas',)}
                >
                    <Text style={styles.texto}>Motoristas!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.navigate('Veiculos')}
                >
                    <Text style={styles.texto}>Veiculos</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        marginTop: "50%",
    },
    botao:{
        padding: 16,
        backgroundColor: "blue",
        borderRadius: 10,
        marginBottom: 16,
        width: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    texto:{
        color: "#fff",
        fontSize: 20,
    }

  });