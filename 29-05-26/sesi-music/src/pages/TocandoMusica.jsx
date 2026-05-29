import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { musicasMock } from '../dados/musicas';

export default function TocandoMusica({ route, navigation }) {
  const { musica } = route.params || { musica: musicasMock[0] };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
        <Text style={styles.textoVoltar}>✕ Fechar</Text>
      </TouchableOpacity>

      <Image source={{ uri: musica.capa }} style={styles.capa} />

      <View style={styles.infoContainer}>
        <View style={styles.textoContainer}>
          <Text style={styles.titulo}>{musica.titulo}</Text>
          <Text style={styles.artista}>{musica.artista}</Text>
        </View>
      </View>

      <View style={styles.barraProgressoContainer}>
        <View style={styles.barraProgressoFundo}>
          <View style={[styles.barraProgressoPreenchida, { width: '45%' }]} />
        </View>
        <View style={styles.tempoContainer}>
          <Text style={styles.tempoTexto}>1:24</Text>
          <Text style={styles.tempoTexto}>{musica.duracao}</Text>
        </View>
      </View>

      <View style={styles.controlesContainer}>
        <TouchableOpacity><Text style={styles.botaoControle}>⏮</Text></TouchableOpacity>
        
        <TouchableOpacity style={styles.botaoPlay}>
          <Text style={styles.textoPlay}>{'▶'}</Text>
        </TouchableOpacity>

        <TouchableOpacity><Text style={styles.botaoControle}>⏭</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  botaoVoltar: { alignSelf: "flex-start" },
  textoVoltar: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
  capa: { width: 280, height: 280, borderRadius: 8, marginVertical: 20 },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  textoContainer: { flex: 1 },
  titulo: { color: "#FFF", fontSize: 22, fontWeight: "bold" },
  artista: { color: "#B3B3B3", fontSize: 16, marginTop: 5 },
  iconeFavorito: { fontSize: 26 },
  barraProgressoContainer: { width: "100%", marginBottom: 20 },
  barraProgressoFundo: {
    width: "100%",
    height: 4,
    backgroundColor: "#444",
    borderRadius: 2,
  },
  barraProgressoPreenchida: {
    height: 4,
    backgroundColor: "#ff0000",
    borderRadius: 2,
  },
  tempoContainer: {
    flexDirection: "row",
    justifyConent: "space-between",
    marginTop: 8,
  },
  tempoTexto: { color: "#B3B3B3", fontSize: 12 },
  controlesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 30,
  },
  botaoControle: { color: "#FFF", fontSize: 36 },
  botaoPlay: {
    backgroundColor: "#FFF",
    width: 65,
    height: 65,
    borderRadius: 32.5,
    alignItems: "center",
    justifyContent: "center",
  },
  textoPlay: { color: "#000", fontSize: 28 },
  statusTexto: { color: "#ff0000", fontSize: 12, fontWeight: "bold" },
});