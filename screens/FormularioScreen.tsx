import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Switch, TextInput } from 'react-native-gesture-handler'
import { Snackbar } from 'react-native-paper'

export default function FormularioScreen() {

  const [nombre, setnombre] = useState("")
  const [edad, setedad] = useState(0)
  const [datos, setdatos] = useState({ nombre: "", edad: 0 })
  const [activado, setactivado] = useState(false)

  function guardar() {
    if (nombre.trim() !== "" && edad.toString().trim() !== "") {
      setdatos({
        nombre: nombre.trim(),
        edad: edad
      })
      Alert.alert("Mensaje", "Los datos se han guardado con éxito")
    } else {
      Alert.alert("ERROR", "No se permiten campos en blanco")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60 }}>Formulario</Text>

      <TextInput
        placeholder='Ingresar nombre'
        style={styles.input}
        onChangeText={(texto) => setnombre(texto)}
      />

      <TextInput
        placeholder='Ingresar edad'
        style={styles.input}
        onChangeText={(texto) => setedad(+texto)}
        keyboardType='numeric'
      />

      <Button title="Guardar" onPress={guardar} />

      <View style={styles.linea} />
      <Text style={styles.txt}>Ver Datos</Text>
      <Switch
        value={activado}
        onValueChange={() => setactivado(!activado)}
      />
      <View style={styles.linea} />

      {
        activado
          ? <View>
              <Text style={styles.txt}>Nombre:  {datos.nombre}</Text>
              <Text style={styles.txt}>Edad:  {datos.edad}</Text>
            </View>
          : <Text style={styles.txt}>Alerta de Spoiler</Text>
      }

      <Snackbar
        visible={activado}
        onDismiss={() => setactivado(false)}
        action={{
          label: 'Cerrar',
          onPress: () => setactivado(false),
        }}
      >
        Mostrando datos activados.
      </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 30
  },
  linea: {
    borderWidth: 1,
    width: "90%",
    margin: 10
  },
  input: {
    fontSize: 25,
    backgroundColor: "#454e4f",
    width: "80%",
    margin: 2,
    padding: 10,
    borderRadius: 10,
    color: "white"
  },
  container: {
    flex: 1,
    backgroundColor: '#905a09',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
