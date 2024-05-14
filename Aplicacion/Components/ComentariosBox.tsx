import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, Modal, Pressable } from "react-native";
import { addDoc, collection, onSnapshot, query, orderBy, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { FIRESTORE_DB, FIREBASE_AUTH } from "../Firebase/config";
import { getDoc } from 'firebase/firestore'; 

interface propComentario{
  info:{
    colorBase: String
  }
}

const Comentarios: React.FC<propComentario> = ({info}) => {

  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState(""); 
  const [userData, setUserData] = useState<any | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editText, setEditText] = useState("");
  const [editCommentId, setEditCommentId] = useState("");

  const firestore = FIRESTORE_DB;

  const palabrasInapropiadas = [
    "puta", "malparida", "perra", "gonorrea", 'hdp', 
    'hijueputa', 'verdulera', 'sorra', 'zorra', 'caremonda', 
    'malparido', 'muerte', 'muerte', 'mama', 'papa', 'hijos'
  ];

  useEffect(() => {
    const getUserData = async () => {
      try {
        if (FIREBASE_AUTH.currentUser) {
          const userDoc = await getDoc(doc(firestore, 'usuarios', FIREBASE_AUTH.currentUser.uid)); // Suponiendo que 'usuarios' es la colección donde guardas los datos del usuario
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUserData();
  }, [firestore]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(FIRESTORE_DB, 'comentarios'), orderBy("fecha")),
      (snapshot) => {
        const updateComentarios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setComentarios(updateComentarios);
      }
    );
    return () => unsubscribe();
  }, []);

  const contienePalabrasInapropiadas = (texto) => {
    const palabras = texto.split(/\s+/);
    return palabras.some((palabra) => palabrasInapropiadas.includes(palabra.toLowerCase() || /(a{4,}|e{4,}|i{4,}|o{4,}|u{4,})/i.test(palabra)));
  };

  const agregarComentario = async () => {
    if (nuevoComentario.trim() !== "") {
      if (contienePalabrasInapropiadas(nuevoComentario)) {
        Alert.alert("Advertencia", "El comentario contiene palabras inapropiadas. Por favor, modifícalo.");
        return;
      }

      const comentario = {
        texto: nuevoComentario,
        usuario: `${userData.username}`,
        fecha: new Date().toISOString(),
      };

      try {
        await addDoc(collection(FIRESTORE_DB, 'comentarios'), comentario);
        setNuevoComentario("");
      } catch (error) {
        console.error("Error al agregar el comentario: ", error);
      }
    }
  };

  const eliminarComentario = async (comentarioId) => {
    try {
      await deleteDoc(doc(FIRESTORE_DB, 'comentarios', comentarioId));
    } catch (error) {
      console.error("Error al eliminar el comentario:", error);
    }
  };

  const editarComentario = async (comentarioId, nuevoTexto) => {
    try {
      await updateDoc(doc(FIRESTORE_DB, 'comentarios', comentarioId), { texto: nuevoTexto });
    } catch (error) {
      console.error("Error al editar el comentario:", error);
    }
  };

  const openModal = (commentId, text) => {
    setEditCommentId(commentId);
    setEditText(text);
    setModalVisible(true);
  };

  const closeModal = () => {
    setEditText("");
    setModalVisible(false);
  };

  const handleEdit = () => {
    editarComentario(editCommentId, editText);
    closeModal();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: `${info.colorBase}`,
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    input: {
      flex: 1,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
    },
    commentContainer: {
      backgroundColor: '#fff',
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
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
    commentActions: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 5,
    },
    actionText: {
      color: '#007bff',
      marginLeft: 10,
    },
    customButton: {
      backgroundColor: '#ff4500',
      borderRadius: 5,
      paddingHorizontal: 15,
      paddingVertical: 8,
    },
    customButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    contenedorInterno:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: `${info.colorBase}`,
      marginHorizontal: 40,
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
      padding: 10
    },
    modalTitle: {
      fontSize: 20,
      marginBottom: 10,
    },
    modalInput: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
    },
    modalButtonsContainer: {
      flexDirection: 'row',
    },
    modalButton: {
      flex: 1,
      paddingVertical: 10,
      alignItems: 'center',
      borderWidth: 0.5,
      
    },
    modalButtonCancel: {
      backgroundColor: '#ff4500',
      marginRight: 5,
    },
    modalButtonSave: {
      backgroundColor: '#5cb81c',
      marginLeft: 5,
    },
    modalButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={nuevoComentario}
          onChangeText={(text) => setNuevoComentario(text)}
          placeholder="Escribe tu comentario..."
        />
        <TouchableOpacity
          onPress={agregarComentario}
          style={styles.customButton}
        >
          <Text style={styles.customButtonText}>Comentar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={comentarios}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <Text style={styles.commentUser}>{item.usuario}</Text>
            <Text style={styles.commentText}>{item.texto}</Text>
            <Text style={styles.commentDate}>Fecha: {new Date(item.fecha).toLocaleString()}</Text>
            {userData && userData.username === item.usuario && (
              <View style={styles.commentActions}>
                <TouchableOpacity onPress={() => openModal(item.id, item.texto)}>
                  <Text style={styles.actionText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => eliminarComentario(item.id)}>
                  <Text style={styles.actionText}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.contenedorInterno}>
          <Text style={styles.modalTitle}>EDITAR COMENTARIO</Text>
          <TextInput
            style={styles.modalInput}
            value={editText}
            onChangeText={(text) => setEditText(text)}
            placeholder="Escribe tu comentario..."
          />
          <View style={styles.modalButtonsContainer}>
            <Pressable style={[styles.modalButton, styles.modalButtonCancel]} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </Pressable>
            <Pressable style={[styles.modalButton, styles.modalButtonSave]} onPress={handleEdit}>
              <Text style={styles.modalButtonText}>Guardar</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};



export default Comentarios;
