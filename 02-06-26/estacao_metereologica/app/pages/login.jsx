import { useState } from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Logo from '../../assets/image.jpg';

export default function Login({navigation}){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <View style={styles.container}>
            {/* Substituí o estilo inline pela classe logo */}
            <Image source={Logo} style={styles.logo}/>
            <Text style={styles.tituloPrincipal}>Login</Text>
            <TextInput 
                style={styles.input}
                placeholder = 'Insira seu e-mail'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput 
                style={styles.input}
                placeholder = '****'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <TouchableOpacity style={styles.botaoEntrar} onPress={() => navigation.replace('Principal')}> 
                <Text style={styles.textoBotao}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoCadastrar} onPress={() => navigation.navigate('Registro')}> 
                <Text style={styles.textoCadastrar}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center', // Adicionado para centralizar a imagem na tela
    marginBottom: 20,
  },
  tituloPrincipal: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 16,
    color: "#475569",
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#0f172a",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
    elevation: 1,
  },
  botaoEntrar: {
    backgroundColor: "#3b82f6",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
    shadowColor: "#3b82f6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotao: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  botaoCadastrar: {
    alignItems: "center",
    paddingVertical: 10,
  },
  textoCadastrar: {
    color: "#3b82f6",
    fontSize: 16,
    fontWeight: "500",
  },
});