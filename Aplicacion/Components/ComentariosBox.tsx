import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../Firebase/config"; // Importa la instancia de Firestore que ya tienes configurada


const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(FIRESTORE_DB, 'comentarios'), (snapshot) => {
      const updateComentarios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setComentarios(updateComentarios);
    });
    return () => unsubscribe();
  }, []);

  const agregarComentario = async () => {
    if (nuevoComentario.trim() !== "") {
      const comentario = {
        texto: nuevoComentario,
        usuario: 'Anónimo', // Suponiendo que el usuario tiene un campo "nombre"
        fecha: new Date().toISOString(),
      };

      try {
        await addDoc(collection(FIRESTORE_DB, 'comentarios'), comentario);
        setNuevoComentario(""); // Limpiar el campo de comentario después de agregarlo
      } catch (error) {
        console.error("Error al agregar el comentario: ", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Interfaz para escribir un nuevo comentario */}
      <TextInput
        style={styles.input}
        value={nuevoComentario}
        onChangeText={(text) => setNuevoComentario(text)}
        placeholder="Escribe tu comentario..."
      />
      <Button title="Comentar" onPress={agregarComentario} />

      {/* Mostrar lista de comentarios */}
      <FlatList
        data={comentarios}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <Text style={styles.commentUser}>{item.usuario}</Text>
            <Text style={styles.commentText}>{item.texto}</Text>
            <Text style={styles.commentDate}>Fecha: {new Date(item.fecha).toLocaleString()}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  commentContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  commentUser: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentText: {
    marginBottom: 5,
  },
  commentDate: {
    color: 'gray',
  },
});

export default Comentarios;
