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
    {key: 'body', Component: (
      <View style={styles.body}> 
        <Text style={styles.TituloConocenos}>Conócenos </Text>
        <Text style={styles.subtituloConocenos}>!Consulta que tipo de plantas adornan hoy la Sucursal del cielo !</Text>
        

        {/* VOY HASTA AQUI */}
        <View >
          <View style={styles.rosaComuna1}>
             <Image style={styles.imgRosa} source={require('../../../../assets/Comuna1/RosaComuna1.jpg')}/>
          </View>
        </View>
      </View>
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

  icon: {
    margin: 10,
    width: 35,
    height: 25,
    top: 1,
  },

  iconContainer: {
    width: 35,
    height: 25,
    margin: 10,
    top: 1,
  },

  body: {
    top: '5%',
  },

  TituloConocenos: {
    left: '5%',
    fontSize: 25,
  },

  subtituloConocenos:{
      top: '2%', 
      left: '8%',
      marginRight: '10%',
      fontSize: 20,
  },

  rosaComuna1:{
    top: '20%',
    left: '4%',
    backgroundColor: '#5cb85c',
    width: '52%',
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',


  },

  imgRosa:{
      height: '90%',
      width: '80%',
  } ,


});
