import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    navigation.replace('HomeTabs');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <TextInput style={styles.input} placeholder="E-mail ou usuário" placeholderTextColor="#888" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#888" secureTextEntry value={senha} onChangeText={setSenha} />

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.botaoTexto}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.linkTexto}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: { width: 250, height: 150, marginBottom: 15, resizeMode: "contain" },
  titulo: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 30,
    letterSpacing: 2,
  },
  input: {
    width: "100%",
    backgroundColor: "#1E1E1E",
    color: "#FFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  botao: {
    width: "100%",
    backgroundColor: "#2a4c1a",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  botaoTexto: { color: "#FFF", fontWeight: "bold", fontSize: 16 },
  linkTexto: { color: "#ff0000", fontSize: 14 },
});