import { Text,View,TouchableOpacity } from "react-native";
import styled from "styled-components";


export const Texto = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Container = styled.View`
  display: flex;
  align-items: center;
  margin-top: 50%;
`

export const Botao = styled.TouchableOpacity`
  padding: 16px;
  background-color: blue;
  border-radius: 10px;
  margin-bottom: 16px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`