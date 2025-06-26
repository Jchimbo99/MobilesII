import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";

import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import RegistroScreen from "../screens/RegistroScreen";

const Tab = createBottomTabNavigator()

function MyTab() {
    return (
        <Tab.Navigator initialRouteName="Registro">
            <Tab.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen name="Login" component={LoginScreen}
                options={{
                    tabBarIcon: () => (<Entypo name="login" size={24} color="black" />)

                }} />
            <Tab.Screen name="Registro" component={RegistroScreen} />

        </Tab.Navigator>
    )
}

export default function NavegadorBottom() {
    return (
        <NavigationContainer>
            <MyTab />
        </NavigationContainer>
    )
}