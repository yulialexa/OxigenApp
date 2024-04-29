import { View, Text, SafeAreaView, Pressable, StyleSheet, Image, TouchableOpacity, Touchable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationProp } from '@react-navigation/native';
import BotonComuna from '../../../Components/BotonComuna';

import Comentarios from '../../../Components/ComentariosBox';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}



const ZonaVerde = ({ navigation }: RouterProps) => {

  const botonComuna1 = {
    Titulo: 'COMUNA 1',
    funcion: () => {navigation.navigate('Mapa')},
    color: '#5cb85c'
  };



  return (
    <View>

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

        <View style={styles.contenedorBotones}> 

        <BotonComuna info={botonComuna1} />    

        </View>

        

        <Comentarios  />

        

      </SafeAreaView>
    </View>
  )
}

export default ZonaVerde


const styles = StyleSheet.create({
  Contenedortitulo: {
    backgroundColor: '#FFFFFF', // color rosa pálid
    alignContent: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: '6%',
    left: '7%',
    width: '85%'
  },
  contenedorBotones: {

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
    backgroundColor: '#5cb85c', // color verde palido
    alignSelf: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: '70%'
  },
  fertilidadText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333', // color del texto
  },
});
