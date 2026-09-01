import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './style.js'
import { TextInput } from 'react-native-web';
export default function Search() {
    return (
        <View style={styles.containerSearch}> 
      <TextInput 
      placeholder = 'Digite o filme que deseja buscar'
      style={styles.inputSearch}
      ></TextInput>
      
      <TouchableOpacity>
      <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
      </View>
    )
}