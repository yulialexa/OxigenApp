import React, { useState, useEffect, Component } from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  Pressable, 
  StyleSheet, 
  Image, 
  KeyboardAvoidingView, 
  FlatList 
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import BotonComuna from '../../../Components/BotonComuna';
import Comentarios from '../../../Components/ComentariosBox';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const ZonaRosa = ({ navigation }: RouterProps) => {

  const BotonFloresInfo = {
    Titulo: 'Plantas y Flores Zona Rosa',
    funcion : () => {navigation.navigate('PlantasYFloresZonaRosa')},
    color: '#FADDF7'
  }

  const colorComentario = {
    colorBase: '#FADDF7',
    DataBaseZona: 'ComentariosZonaRosa'
  }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: '9%' }}>
      <FlatList
        contentContainerStyle={styles.container}
        data={['header']}
        renderItem={({ item }) => (
          <>
            <View style={styles.iconContainer}>
              <Pressable
                onPress={() => navigation.navigate('Mapa')}
                style={({ pressed }) => {
                  return { opacity: pressed ? 0 : 1 };
                }}>
                <Image style={styles.icon} source={require('../../../assets/atras.png')} />
              </Pressable>
            </View>
            <View style={styles.Contenedortitulo}>
              <Text style={styles.titulo}>ZONA ROSA</Text>
            </View>
            <View style={styles.fertilidadContainer}>
              <Text style={styles.fertilidadText}>En esta zona los suelos arcillosos con buena retención de humedad. Son aptos para una variedad de árboles y plantas que toleran la humedad. Precauciones: Se recomienda mejorar el drenaje en algunas zonas para evitar problemas de encharcamiento.</Text>
            </View>
            <View style={styles.semititulobotones}>
              <Text style={styles.letraSemi}>Presiona y mira las plantas y flores de la Zona Rosa de la sucursal del cielo!!</Text>
            </View>
            <View style={styles.contenedorBotonesColumna}>
              <BotonComuna info={BotonFloresInfo} />
            </View>

            <KeyboardAvoidingView behavior='height'>
              <View style={styles.comentariosContainer}>
                <Text style={styles.textoInformativo}>Ayúdanos a ingresar información de las plantas que conozcas y que quieras plantar en estas Zonas Rosa </Text>
                <Comentarios info={colorComentario}/>
              </View>
            </KeyboardAvoidingView>
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default ZonaRosa;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  Contenedortitulo: {
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: '6%',
    left: '7%',
    width: '85%'
  },
  semititulobotones: {
    width: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  letraSemi: {
    textAlign: 'center',
    fontSize: 20
  },
  contenedorBotonesColumna: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
  },
  icon: {
    margin: 10,
    width: 35,
    height: 25,
    top: 1,
  },
  titulo: {
    color: '#FFBCF8',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center'
  },
  iconContainer: {
    width: 35,
    height: 25,
    margin: 10,
    top: 1,
  },
  fertilidadContainer: {
    backgroundColor: '#FADDF7',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    width: '70%'
  },
  fertilidadText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  textoInformativo: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    color: '#333',
  },
  comentariosContainer: {
    paddingHorizontal: 20,
    marginHorizontal: 19,
    paddingTop: 10,
    backgroundColor: '#FADDF7',
    borderTopEndRadius: 45,
    borderTopStartRadius: 45,
    marginTop: 20
  },
});
