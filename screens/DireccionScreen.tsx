import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, Alert, StyleSheet, ScrollView } from 'react-native';

export default function DireccionScreen({ route }: any) {

    const { tipo } = route.params || { tipo: 'General' };


    const [calle, setCalle] = useState('');
    const [numero, setNumero] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [referencias, setReferencias] = useState('');
    const [esFiscal, setEsFiscal] = useState(false); 


    const validarYGuardar = () => {
        if (!calle.trim() || !numero.trim() || !ciudad.trim()) {
            Alert.alert('Error', 'Todos los campos  son obligatorios.');
            return;
        }

        if (isNaN(Number(numero))) {
            Alert.alert('Error', 'Número Exterior debe ser numérico.');
            return;
        }

        Alert.alert(
            'Dirección Guardada',
            `Tipo: ${tipo}\nCalle: ${calle}\nNúmero: ${numero}\nCiudad: ${ciudad}\nReferencias: ${referencias || 'Ninguna'}\nFiscal: ${esFiscal ? 'Sí' : 'No'}`
        );
    };

    return (
        <ScrollView
            contentContainerStyle={styles.container}>
            <Text
                style={styles.title}>
                    Dirección ({tipo})</Text>

            <Text

                style={styles.label}>
                    Calle</Text>
            <TextInput
                style={styles.input}
                value={calle}
                onChangeText={setCalle} />


            <Text
                style={styles.label}>
                    Número Exterior</Text>
            <TextInput
                style={styles.input}
                value={numero}
                onChangeText={setNumero} keyboardType="numeric" />

            <Text
                style={styles.label}>
                    Ciudad</Text>
            <TextInput
                style={styles.input}
                value={ciudad}
                onChangeText={setCiudad} />

            <Text
                style={styles.label}>Referencias</Text>
            <TextInput
                style={styles.input}
                value={referencias}
                onChangeText={setReferencias} />

            <View
                style={styles.switchContainer}>
                <Text>¿Es dirección fiscal?</Text>
                <Switch
                    value={esFiscal}
                    onValueChange={setEsFiscal} />
            </View>

            <Button title="Guardar Dirección" onPress={validarYGuardar} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexGrow: 1,
        backgroundColor: '#51f580'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center'
    },
    label: {
        marginTop: 15,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        borderColor: '#72720d',
        borderRadius: 5,
        padding: 8,
        marginBottom: 10,
        backgroundColor: '#535323'
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    }
});
