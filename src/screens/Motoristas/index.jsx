import { Text,View } from "react-native"
import { TouchableOpacity,FlatList,Image,StyleSheet } from "react-native";

const motoristas = [
    {
        "id": 1,
        "nome": "Rafael Brito",
        "CNH": 77771284859 ,
        "categoria": "AB"
    },
    {
        "id": 2,
        "nome": "Felipe Barros",
        "CNH": 7124797700 ,
        "categoria": "AD"
    },
    {
        "id": 3,
        "nome": "Marcus F",
        "CNH": 7771251527700 ,
        "categoria": "B"
    },
    {
        "id": 4,
        "nome": "Márcia",
        "CNH": 7772157700 ,
        "categoria": "AB"
    },
    {
        "id": 5,
        "nome": "Joana",
        "CNH": 2411247700 ,
        "categoria": "AE"
    },
    {
        "id": 6,
        "nome": "Junior",
        "CNH": 71274127700 ,
        "categoria": "AC"
    },
    {
        "id": 7,
        "nome": "Juliana",
        "CNH": 77128578125 ,
        "categoria": "AB"
    },
    {
        "id": 8,
        "nome": "Daniel",
        "CNH": 77772398635 ,
        "categoria": "A"
    },
    {
        "id": 9,
        "nome": "Lucas",
        "CNH": 7214871200 ,
        "categoria": "AD"
    },
    {
        "id": 10,
        "nome": "Roberta",
        "CNH": 77771248910 ,
        "categoria": "AE"
    }


]

const img = require('../../assets/drive.png')

export default function Motoristas({navigation}) {
    return(
        <View style={styles.container}>
            <FlatList
                style={styles.box} 
                data={motoristas}
                renderItem={({item}) => {
                    return (
                        <View key={item.id} >
                            <TouchableOpacity style={styles.item}
                                onPress={() => navigation.navigate('Motorista',item) }
                            >
                                <Image style={styles.img} source={img}/>
                                <Text style={styles.text}>{item.nome}</Text>
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
  
