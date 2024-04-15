import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Pressable } from 'react-native';
import { createUserWithEmailAndPassword, sendEmailVerification, } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../Firebase/config';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Registro = ({navigation}: RouterProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [Apellido, setApellido] = useState('');
  const [Barrio, setBarrio] = useState('');
  const [Direccion, setDireccion] = useState('');

  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // Estado para el modal de verificación
  const auth = FIREBASE_AUTH;
  const firestore = FIRESTORE_DB;

  const singUp = async () => {
    setLoading(true);
    try {
      // Crear usuario en Firebase Auth
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (response) => {
          console.log(response);
          // Verificar usuario con el correo
          await sendEmailVerification(auth.currentUser);
          setModalVisible(true); // Mostrar el modal de verificación
        })
        .catch((error) => {
          console.log(error);
          alert('Registro fallido: ' + error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      alert('Registro fallido: ' + error.message);
      setLoading(false);
    }
  };

  const activateAccount = async () => {
    try {
      // Guardar los datos en Firestore
      await addDoc(collection(firestore, 'usuarios'), {email: email , Nombre: nombre, Apellido: Apellido, Barrio: Barrio, Direccion: Direccion });
      navigation.navigate('Interno'); // Redirigir a la navegación de inicio de sesión
    } catch (error) {
      console.log(error);
      alert('Error al guardar los datos: ' + error.message);
    }
  };


  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Verifica tu correo electrónico para activar tu cuenta.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                activateAccount(); // Llamar a la función para activar la cuenta y guardar los datos en Firestore
              }}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text>¡Bienvenido!</Text>
      <Text> "Descubre y transforma: Tu guía para reforestar áreas desafiantes.</Text>
      <KeyboardAvoidingView behavior='padding'>
      <TextInput value={nombre} style={styles.input} placeholder="Nombre:" autoCapitalize="none" onChangeText={(text) => setNombre(text)} />
      <TextInput value={Apellido} style={styles.input} placeholder="Apellido:" autoCapitalize="none" onChangeText={(text) => setApellido(text)} />
      <TextInput value={Direccion} style={styles.input} placeholder="Direccion de usuario" autoCapitalize="none" onChangeText={(text) => setDireccion(text)} />
      <TextInput value={Barrio} style={styles.input} placeholder="Barrio de usuario" autoCapitalize="none" onChangeText={(text) => setBarrio(text)} />
      <TextInput value={email} style={styles.input} placeholder="Correo electronico:" autoCapitalize="none" onChangeText={(text) => setEmail(text)} />
      <TextInput value={password} style={styles.input} placeholder="Contraseña:" autoCapitalize="none" onChangeText={(text) => setPassword(text)} />
      </KeyboardAvoidingView>

      
      {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <>
              <TouchableOpacity style={styles.button} onPress={singUp}>
                <Text style={styles.buttonText}>Únete</Text>
              </TouchableOpacity>
            </>
          )}

    </View>
  )
}

export default Registro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#a2f1f8',
    position:'relative'
  },
  signInContainer: {
    position: 'absolute',
    bottom: '82%',
    width: '100%',
    paddingHorizontal: 65,
    zIndex:2
  },
  whiteSheet: {
    width: '100%',
    height: '80%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    color:'#ffffff',
    zIndex:1
  },
  h1: {
    fontFamily: 'Roboto',
    color: '#000000',
    textAlign:'right',
    fontSize: 28,
    fontWeight:'bold',
  },
  signInText: {
    fontFamily:'Roboto',
    color:'#000000',
    textAlign:'right',
    fontSize:14,
  },
  signInLink: {
    fontWeight:'bold',
    color: 'black',
  },
  h2:{
    fontFamily:'Roboto',
    fontWeight:'bold',
    paddingTop:5,
    marginHorizontal: 65,
    color:'#d3d3d3',
    textAlign:'left',
    fontSize:12,
    zIndex:3
  },
  input: {
    fontFamily:'Roboto',
    marginVertical: 10,
    marginHorizontal: 65,
    height: 56,
    borderWidth: 0,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#d3d3d3'
  },
  button: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 65,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
  },
  // Estilos para el modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
});