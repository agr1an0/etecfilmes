import react from "react";
import { Touchable, TouchableOpacity } from "react-native";
import {View, Image, Text} from  'react-native'
import styles from "./style.js";
import { useNavigation } from "@react-navigation/native";
import Detalhes from "../../telas/detalhes/index.js";

export default function CardMovies({nome, nota, imagem}) {
     const navigation = useNavigation()
     return(
          
          <TouchableOpacity style={styles.containerFilmes} onPress={()=> navigation("Detalhes", {nome, nota})}>
            <Image style = {styles.imagens} source={{uri: imagem}} />
            <Text style={{color: 'white', fontSize: '20px' }}> {nota} </Text>
            <Text style={{color: 'white', fontSize: '20px' }}> {nome} </Text>
          </TouchableOpacity>
     )
}