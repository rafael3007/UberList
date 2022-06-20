
import axios from "axios";
import { useEffect, useState } from "react";
import { Text,View,TouchableOpacity, StyleSheet,  } from "react-native"
import { SafeAreaView } from "react-native"
import { Texto, Container, Botao } from "./styles";



async function listarMotoristas(){
    //await pegarVeiculos()
    const resultado = await axios.get("http://192.168.0.104:5000/motoristas/")

    return resultado.data
}

async function listarVeiculos(){
    //await pegarVeiculos()
    const resultado = await axios.get("http://192.168.0.104:5000/veiculos/")

    return resultado.data
}


export default function Home({navigation}) {


    return(
        <SafeAreaView >
            <Container>
                <Botao
                    onPress={async() =>{
                        const resultado = await listarMotoristas()
                        navigation.push('Motoristas',resultado)
                    }}
                >
                    <Texto>Motoristas!</Texto>
                </Botao>
                <Botao
                    onPress={async() => {
                        const resultado = await listarVeiculos()
                        navigation.navigate('Veiculos',resultado)
                    }}
                >
                    <Texto>Veiculos</Texto>
                </Botao>
            </Container>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });