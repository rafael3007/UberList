import axios from "axios"
import { Text, StyleSheet, View, Image, FlatList,TouchableOpacity } from "react-native"


const img = require('../../assets/drive.png')


async function listarVeiculo(id){
    //await pegarVeiculos()
    const resultado = await axios.get("http://192.168.0.104:5000/veiculo/"+id)

    return resultado.data
}



export default function Veiculos(props) {

    const veiculos = props.route.params

    return(
        <View style={styles.container}>
            <FlatList
                style={styles.box} 
                data={veiculos}
                renderItem={({item}) => {
                    return (
                        <View key={item.id} >
                            <TouchableOpacity style={styles.item}
                                onPress={async() => {
                                    const veiculo = await listarVeiculo(item.id)
                                    props.navigation.navigate('Veiculo',veiculo)
                                } }
                            >
                                <Image style={styles.img} source={img}/>
                                <Text style={styles.text}>{item.placa}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
                keyExtractor={(item)=>item.id}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#41c3e8",
      margin: 4,
      borderRadius: 10,
      padding: 16,
      alignItems: "center",
      

    },
    text: {
      fontSize: 25,
      fontWeight: '500',
      color: "#FFF"
    },
    box:{
        marginTop: 10,
    },
    item: {
        width: 300,
        margin: 8,
        backgroundColor: "#2b0980",
        display: "flex",
        flex: 1,
        flexDirection: "row",
        padding: 16,
        borderRadius: 10,
        alignItems: "center",
    },
    img: {
        marginHorizontal: 8,
        width: 50,
        height: 50,
    }
  });
  

