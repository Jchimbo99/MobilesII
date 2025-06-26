import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={{ uri: "https://www.pexels.com/photo/mountain-at-night-under-a-starry-sky-1624496/" }}
      style={styles.container}
    >
      <Text>WelcomeScreen</Text>
      <Button title="login" onPress={() => navigation.navigate("Login")} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  }
})
