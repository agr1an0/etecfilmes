import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './style.js'
import { TextInput } from 'react-native-web';

export default function Header() {
    return (
        <View style = {styles.viewHeader}>
                
              <Feather name="menu" size={24} color="black" />
        
              <Text style = {styles.textHeader}> TECFILMES </Text>
        
              <TouchableOpacity> 
        
              </TouchableOpacity>
              
              </View>
    )
 }