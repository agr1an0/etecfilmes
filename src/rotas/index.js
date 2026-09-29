import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import  Detalhes  from "../telas/detalhes/index"
import Home from "../telas/home";
export default function Rotas() {
    const Stack = createStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator
            name="Header"
            component={Home}
            options={{headerShown:false}}
            >
                <Stack.Screen component={Detalhes} name= "Detalhes"/>

            </Stack.Navigator>


        </NavigationContainer>


    );
}