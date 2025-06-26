import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from '../screens/LoginScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import FormularioScreen from "../screens/FormularioScreen";
import { NavigationContainer } from "@react-navigation/native";
import RegistroScreen from "../screens/RegistroScreen";
import DireccionScreen from "../screens/DireccionScreen";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Tab" component={MyTabs}/>
            

        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator 
        initialRouteName="Registro"
        screenOptions={{headerShown:false}}
        
        >
            
            <Tab.Screen name="Registro" component={RegistroScreen}/>
            <Tab.Screen name="Direccion" component={DireccionScreen}/>
            
            



        </Tab.Navigator>
    )
}

export default function NavegadorPrincipal(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
