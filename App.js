import { StyleSheet, Text, View,TouchableOpacity, Image,  } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { FlatList, TextInput } from 'react-native-web';
import Header from './src/componentes/Header';
import Search from './src/componentes/Search';
import Banner from './src/componentes/Banner';
import CardMovies from './src/componentes/cardMovies';
import Filmes from './Data/Filmes';
import Rotas from "./src/rotas/index"
export default function App() {
  return (
  <Rotas></Rotas>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: "center",
  },

  containerFilmes:{
        paddingTop:20,
        paddingBottom:16,
        paddingRight:16,
        width:140,
        heigh:28
    },

    titulo:{
        color: '#fff',
        fontSize:12,
        paddingTop:8  
    },

    textNota:{
        fontSize:10,
        color:'#fff',
        paddingLeft:4
    },

    images:{
        width:'100%',
        height:170,
        borderRadius: 8,    
       
    },
    imagens:{
        width:140,
        height: 160,
        margin: '15px',
        border: 'solid white 5px'
    }
  // viewHeader:{
  //   justifyContent: 'space-between',
  //   flexDirection:'row',
  //   marginTop: 20,
  //   alignItems: 'center',
  //   width: "90%"
  // },
  // textHeader: {
  //   fontSize: 22,
  //   color: 'white',
  //   fontWeight: 'bold'
  // },
  //Passamos parra o style.js
  // containerSearch: {
  //   marginTop: 20,
  //   width: '90%',
  //   backgroundColor: "white",
  //   borderRadius: 5,
  //   padding: 8,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center'
  // },
  // inputSearch: {
  //   height: 40,
  //   padding: 5,
  //   width: '100%'
  // },
  // imageBanner: {
  //   width: '90%',
  //   height:200,
  //   marginTop:15,
  //   borderRadius: 10
  // },
  // textBanner: {
  //   color: 'white',
  //   width: '90%',
  //   fontSize: 30,
  //   marginTop: 20,
  //   fontWeight: 'bold'
  // }
});
