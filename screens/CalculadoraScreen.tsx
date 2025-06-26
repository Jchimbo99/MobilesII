import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function CalculadoraScreen() {
const [numero1, setnumero1] = useState(0);
const [numero2, setnumero2] = useState(0);


function sumar() {
    const resultado = numero1 + numero2;
    Alert.alert("Resultado de la suma", `${numero1} + ${numero2} = ${resultado}`);
}


useEffect(() => {
    if (numero1 < -5) setnumero1(-5);
    if (numero1 > 5) setnumero1(5);

    if (numero2 < -5) setnumero2(-5);
    if (numero2 > 5) setnumero2(5);
}, [numero1, numero2]);

return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Calculadora</Text>

    <View style={styles.fila}>
        <Button title=" - " onPress={() => setnumero1(numero1 - 1)} />
        <Text style={styles.numero}>{numero1}</Text>
        <Button title=" + " onPress={() => setnumero1(numero1 + 1)} />
    </View>

    <View style={styles.fila}>
        <Button title=" - " onPress={() => setnumero2(numero2 - 1)} color={"green"} />
        <Text style={styles.numero}>{numero2}</Text>
        <Button title=" + " onPress={() => setnumero2(numero2 + 1)} color={"green"} />
    </View>

    <View style={styles.linea} />

    
    <Button title='Suma' onPress={sumar} />
    </View>
);
}

const styles = StyleSheet.create({
linea: {
    backgroundColor: "black",
    width: 180,
    borderWidth: 3,
    margin: 10
},
container: {
    flex: 1,
    backgroundColor: "#7266f4",
    justifyContent: "center",
    alignItems: "center",
},
titulo: {
    fontSize: 40,
    color: "white",
    marginBottom: 40,
},
fila: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
},
numero: {
    fontSize: 40,
    color: "white",
    marginHorizontal: 20,
},
});
