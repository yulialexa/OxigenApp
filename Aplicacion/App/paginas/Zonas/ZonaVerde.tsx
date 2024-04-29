import React, { useState, useEffect, Component } from 'react';
import { View, Text, SafeAreaView, Pressable, StyleSheet, Image, FlatList } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import BotonComuna from '../../../Components/BotonComuna';
import Comentarios from '../../../Components/ComentariosBox';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const ZonaVerde = ({ navigation }: RouterProps) => {
  const botonComuna1 = {
    Titulo: 'COMUNA 1',
    funcion: () => { navigation.navigate('Comuna1'); },
    color: '#5cb85c'
  };

  const botonComuna2 = {
    Titulo: 'COMUNA 2',
    funcion: () => { navigation.navigate('Comuna2'); },
    color: '#5cb85c'
  };

  const botonComuna3 = {
    Titulo: 'COMUNA 3',
    funcion: () => { navigation.navigate('Comuna11'); },
    color: '#5cb85c'
  };

  const botonComuna4 = {
    Titulo: 'COMUNA 4',
    funcion: () => { navigation.navigate('Comuna20'); },
    color: '#5cb85c'
  };

  const data = [
    { key: 'header', component: (
      <SafeAreaView style={{ marginTop: '10%' }}>
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
          <Text style={styles.titulo} >ZONA VERDE</Text>
        </View>
        <View style={styles.fertilidadContainer}>
          <Text style={styles.fertilidadText}>Posee una fertilidad alta gracias a sus suelos ricos en nutrientes, clima favorable, abundancia de agua y acceso a tecnología agrícola.</Text>
        </View>
        <View style={styles.semititulobotones}>
          <Text style={styles.letraSemi}> Presiona y mira las plantas y flores de cada comuna</Text>
        </View>
      </SafeAreaView>
    ) },
    { key: 'botonesColumna', component: (
      <View style={styles.contenedorBotonesColumna}>
        <BotonComuna info={botonComuna1} />
        <BotonComuna info={botonComuna2} />
      </View>
    ) },
    { key: 'otrosBotones', component: (
      <View style={styles.contenedorBotonesColumna}>
        <BotonComuna info={botonComuna3} />
        <BotonComuna info={botonComuna4} />
      </View>
    ) },
    { key: 'comentarios', component: <Comentarios /> }
  ];

  return (
    <FlatList
      data={data}
      renderItem={({item}) => item.component}
      keyExtractor={(item) => item.key}
    />
  );
};

export default ZonaVerde;

const styles = StyleSheet.create({
  Contenedortitulo: {
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: '6%',
    left: '7%',
    width: '85%'
  },
  semititulobotones:{
    width: 300,
    height: 65,
    alignSelf: 'center',
    marginBottom: 20,
  },
  letraSemi:{
    textAlign: 'center',
      fontSize: 20
  },

  contenedorBotonesColumna: {
    flexDirection: 'row', // Establece la dirección de los elementos en fila
    justifyContent: 'space-between', // Espacio uniforme entre los elementos
    paddingHorizontal: '10%', // Añade un margen horizontal para separar los botones
  },
  icon: {
    margin: 10,
    width: 35,
    height: 25,
    top: 1,
  },
  titulo: {
    color: 'green',
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
    backgroundColor: '#5cb85c',
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
});
