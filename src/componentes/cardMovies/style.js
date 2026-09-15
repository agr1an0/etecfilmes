import { StyleSheet } from "react-native";
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

       imagens:{
        width:140,
        height: 160,
        margin: '15px',
        border: 'solid white 5px',
        borderRadius: 8
    }
})

export default styles