import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './style.js'
import { TextInput } from 'react-native-web';

export default function Banner() {
    return (
      <View>
      <text style={styles.textBanner}> Em Cartaz </text>
      <Image source={require("../../../assets/adão.jpg")}
      style={styles.imageBanner}/>
    </View>
    )
 }