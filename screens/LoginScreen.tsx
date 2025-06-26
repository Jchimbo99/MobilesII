import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={[styles.txt, { fontSize: 65 }]}>Login</Text>



      <TextInput
        placeholder="Ingresar Usuario"
        style={[styles.input, styles.txt]}
      />

      <TextInput
        placeholder="Ingresar Contraseña"
        style={styles.input}
      />
      

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Tab")}>
        <View style={styles.fila}>


          <Text style={styles.txt}>Ir a Registro</Text>
          <Text>     </Text>
          <Entypo name="login" size={50} color="#adb512" />
        </View>
        

      </TouchableOpacity>
      

      
    </View>
  )
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: "row"


  },
  btn: {
    backgroundColor: "#193e26",
    width: "80%",
    height: 120,
    alignItems: "center",
    borderRadius: 30,
    padding: 10


  },
  img: {
    width: 100,
    height: 100
  },
  container: {

    alignItems: "center",
    backgroundColor: "#7266f4",
    flex: 1,
    justifyContent: "center"
  },
  input: {
    backgroundColor: "#666",
    width: "80%",
    height: 60,
    margin: 10,
    borderRadius: 55,
    paddingHorizontal: 35,
    fontSize: 26,



  },
  txt: {
    color: "white",
    fontSize: 35,



  }
})