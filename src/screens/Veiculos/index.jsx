import { Text, StyleSheet, View, Image, FlatList,TouchableOpacity } from "react-native"

const veiculos = [
    {
        "id": 1,
        "placa": "RDB5B72",
        "motorista": "Rafael B",
        "modelo": "Ford KA",
        "ano": 2018
    },
    {
        "id": 2,
        "placa": "RDH0D77",
        "motorista": "Juliano",
        "modelo": "Mercedes",
        "ano": 2015
    },
    {
        "id":3,
        "placa": "RDC7B23",
        "motorista": "Márcio",
        "modelo": "Strada",
        "ano": 2020
    },
    {
        "id": 4,
        "placa": "RDB0F45",
        "motorista": "Juliana",
        "modelo": "S10",
        "ano": 2012
    },
    {
        "id": 5,
        "placa": "NKY4C80",
        "motorista": "Bento",
        "modelo": "Gol",
        "ano": 2015
    },
    {
        "id": 6,
        "placa": "NYL2490",
        "motorista": "Roberta",
        "modelo": "UNO",
        "ano": 2017
    },
    {
        "id": 7,
        "placa": "KOU9801",
        "motorista": "Wilson",
        "modelo": "Classic",
        "ano": 2018
    },
    {
        "id":8,
        "placa": "NCA2643",
        "motorista": "Daniel",
        "modelo": "SW4",
        "ano": 2021
    },
    {
        "id": 9,
        "placa": "PKY2375",
        "motorista": "Otavio",
        "modelo": "Palio",
        "ano": 2019
    },
    {
        "id": 10,
        "placa": "PLA5F48",
        "motorista": "Rodrigo",
        "modelo": "Ford KA",
        "ano": 2017
    },
    {
        "id": 11,
        "placa": "FAP2912",
        "motorista": "Ana",
        "modelo": "Civic",
        "ano": 2018
    }
]
const img = require('../../assets/drive.png')
export default function Veiculos({navigation}) {
    return(
        <View style={styles.container}>
            <FlatList
                style={styles.box} 
                data={veiculos}
                renderItem={({item}) => {
                    return (
                        <View key={item.id} >
                            <TouchableOpacity style={styles.item}
                                onPress={() => navigation.navigate('Veiculo',item) }
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
  

