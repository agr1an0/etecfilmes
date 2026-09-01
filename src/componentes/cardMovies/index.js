import react from "react";
import { Touchable, TouchableOpacity } from "react-native";
import {View, Image, Text, TouchableOpacity} from  'react-native'
import styles from "./styles.js";

export default function cardMovies(titulo, nota, imagem) {

     return(

         <TouchableOpacity>
            <Image style = {styles.imagens} source={{uri:item.imagem}} />
            <Text style={{color: 'white', fontSize: '20px', }}> {item.nome} </Text>
          </TouchableOpacity>
     )
}