import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../Firebase/config';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const OlvidarContraseña = ({ navigation }: RouterProps) => {
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // Estado para el modal de verificación
  const auth = FIREBASE_AUTH;

  // Recuperar contraseña
  const recuperar = async () => {
    try {
      // Envía un correo de recuperación al email proporcionado
      await sendPasswordResetEmail(auth, email);
      setModalVisible(true); // Mostrar el modal de verificación
      console.log('Correo de recuperación enviado');
    } catch (error) {
      console.error('Error al enviar el correo de recuperación:', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Modal de verificación */}
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
            <Text style={styles.modalText}>Verifica tu correo electrónico para recuperar tu contraseña.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.signInContainer}>
        <Pressable
          onPress={() => navigation.navigate('Login')}
          style={({ pressed }) => {
            return { opacity: pressed ? 0 : 1 };
          }}>
          <Image style={styles.icon} source={require('../../assets/atras.png')} />
        </Pressable>
      </View>

      <View style={styles.content}>
      <Image style={styles.logo} source={require("../../assets/Logo.png")} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{`OXIGEN\nAPP`}</Text>
          </View>
        <Text style={styles.h1}>Olvidaste la Contraseña?</Text>
        <Text style={styles.signInText}>Llena los siguientes datos</Text>
        <KeyboardAvoidingView behavior='padding'>
          <Text style={styles.h2}>CORREO</Text>
          <TextInput value={email} style={styles.input} placeholder="hello@gmail.com" autoCapitalize="none" onChangeText={(text) => setEmail(text)} />
          <TouchableOpacity style={styles.button} onPress={recuperar}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default OlvidarContraseña;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    width: '100%',
    
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',

  },
  titleContainer: {
    backgroundColor: '#2B7532',
    padding: 10,
    width: '50%',
    height: '12%',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: '70%',
    height: '40%',
    resizeMode: 'contain',
  },
  signInText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 20,
  },
  h1: {
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  h2: {
    fontWeight: 'bold',
    color: '#888',
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'left',
    width: '100%',
  },
  input: {
    marginVertical: 10,
    height: 50,
    width: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 10,
    backgroundColor: '#FFFFFF',
    color: '#765050C2',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
// Cambiado a 90%
  },
  button: {
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    width: '100%',  // Cambiado a 90%
    alignItems: 'center',
    backgroundColor: '#cff9fd',
    marginTop: 10,
  },
  buttonText: {
    width: 200,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 16,
  },
  icon: {
    width: 35,
    height: 25,
    margin: 10,
    top: 1,
  },
  signInContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 2,
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
    marginTop: 10,
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
