import react from "react";
import { Touchable, TouchableOpacity } from "react-native";
import {View, Image, Text} from  'react-native'
import styles from "./style.js";

export default function CardMovies({titulo, nota, imagem}) {

     return(

         <TouchableOpacity>
            <Image style = {styles.imagens} source={{uri: imagem}} />
            <Text style={{color: 'white', fontSize: '20px' }}> {nota} </Text>
            <Text style={{color: 'white', fontSize: '20px' }}> {titulo} </Text>
          </TouchableOpacity>
     )
}