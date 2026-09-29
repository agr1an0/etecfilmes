import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import CardMovies from "../../componentes/cardMovies/index";

export default function Detalhes() {
    const route = useRoute();
 return(
    
    <View>
    <Text>DETALHES PAGES</Text>
    <Text>{route.params.nome}</Text>
    </View>

    )
}