import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { Checkbox, RadioButton } from 'react-native-paper';

export default function EncuestaScreen() {
  const [contacto, setContacto] = useState('');
  const [recomendar, setRecomendar] = useState('');
  const [razon, setRazon] = useState('');
  const [permitirContacto, setPermitirContacto] = useState(false);
  const [valoracion, setValoracion] = useState(5);
  const [gustosSeleccionados, setGustosSeleccionados] = useState<number[]>([]);

  const opcionesGustos = [
    { id: 1, label: 'Diseño' },
    { id: 2, label: 'Usabilidad' },
    { id: 3, label: 'Rendimiento' },
  ];

  function toggleGusto(id: number) {
    setGustosSeleccionados(prev => {
      if (prev.includes(id)) {
        return prev.filter(g => g !== id);
      }
      return [...prev, id];
    });
  }

  function enviarEncuesta() {
    if (!recomendar) {
      Alert.alert('Error', 'Por favor selecciona si recomendarías la app');
      return;
    }
    Alert.alert(
      'Gracias por tu feedback',
      `Contacto: ${contacto || 'No proporcionado'}\n` +
      `Recomendarías: ${recomendar}\n` +
      `Razón: ${razon}\n` +
      `Permitir contacto: ${permitirContacto ? 'Sí' : 'No'}\n` +
      `Valoración: ${valoracion}\n` +
      `Qué te gustó: ${
        gustosSeleccionados
          .map(id => opcionesGustos.find(g => g.id === id)?.label)
          .filter(Boolean)
          .join(', ') || 'Nada seleccionado'
      }`
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Encuesta de Satisfacción</Text>

      <Text style={styles.label}>Tu contacto (opcional):</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo o teléfono"
        value={contacto}
        onChangeText={setContacto}
      />

      <Text style={styles.label}>¿Recomendarías nuestra app?</Text>
      <RadioButton.Group
        onValueChange={value => setRecomendar(value)}
        value={recomendar}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
          <RadioButton.Item label="Sí" value="Sí" />
          <RadioButton.Item label="No" value="No" />
          <RadioButton.Item label="Quizás" value="Quizás" />
        </View>
      </RadioButton.Group>

      <Text style={styles.label}>¿Qué te gustó?</Text>
      {opcionesGustos.map(opt => (
        <View key={opt.id} style={styles.checkboxRow}>
          <Checkbox
            status={gustosSeleccionados.includes(opt.id) ? 'checked' : 'unchecked'}
            onPress={() => toggleGusto(opt.id)}
          />
          <Text>{opt.label}</Text>
        </View>
      ))}

      <Text style={styles.label}>Comentarios:</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        multiline
        placeholder="Cuéntanos más"
        value={razon}
        onChangeText={setRazon}
      />

      <View style={styles.switchRow}>
        <Text>Permitir contacto para seguimiento</Text>
        <Switch
          value={permitirContacto}
          onValueChange={setPermitirContacto}
        />
      </View>

      <Text style={styles.label}>Valoración (1 a 10): {valoracion}</Text>
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={1}
        maximumValue={10}
        step={1}
        value={valoracion}
        onValueChange={setValoracion}
        minimumTrackTintColor="#7266f4"
        maximumTrackTintColor="#000000"
      />

      <Button title="Enviar Encuesta" onPress={enviarEncuesta} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#58a3e9',
    flexGrow: 1,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    marginTop: 15,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
});
