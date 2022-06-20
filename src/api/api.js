import axios from "axios"

export const api = axios.create({
    baseURL: "http://192.168.15.139:5000"
})

export async function pegarMotoristas(){
    const response =  await axios.get("/motoristas")
    return response
}

export async function pegarMotorista(id){
    const response =  await axios.get(`/motoristas/${id}`)
    return response
}

export async function pegarVeiculos(){
    const response =  await axios.get("/veiculos")
    return response
 }
 
 export async function pegarVeiculo(id){
     const response =  await axios.get(`/veiculos/${id}`)
     return response
 }

// Make a request for a user with a given ID
