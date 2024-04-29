import { View, Text, SafeAreaView, Pressable, Image, StyleSheet, FlatList } from 'react-native'
import React, { Component } from 'react'
import { NavigationProp } from '@react-navigation/native';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Comuna1 = ({navigation}: RouterProps) => {

  const data = [
    {key: 'header', Component: (
      <SafeAreaView style={{ marginTop: '10%' }}>
        <View style={styles.iconContainer}>
          <Pressable
            onPress={() => navigation.navigate('ZonaVerde')}
            style={({ pressed }) => {
              return { opacity: pressed ? 0 : 1 };
            }}>
            <Image style={styles.icon} source={require('../../../../assets/atras.png')} />
          </Pressable>
            </View>

      </SafeAreaView>
    )},

  ]

  return (
      <FlatList 
        data={data}
        renderItem={({item}) => item.Component}
        keyExtractor={(item) => item.key}
      />

  )
}

export default Comuna1

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
