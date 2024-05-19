import { View, Text, SafeAreaView, Pressable, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import ImagenPlanta from '../../../../Components/plantas/ImagenPlanta';
import PlantaImagen from '../../../../Components/plantas/PlantaImagen';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Comuna1 = ({navigation}: RouterProps) => {

  const dataImagenRosa = {
    imagen: require('../../../../assets/Comuna1/RosaComuna1.jpg'),
    nombre: 'Rosa',
    descripcion: 'Flor popular en todo el mundo, con una gran variedad de colores y fragancias.',
    color: '#8EFFA3',
    colorDescripcion: '#5cb85c'
  }

  const dataImagenBromelia = {
    nombre: 'Bromelias',
    imagen: require('../../../../assets/Comuna1/bromeliaComuna1.png'),
    descripcion: 'Son conocidas por sus hojas coloridas y sus flores únicas. Ambas plantas son epífitas, lo que significa que crecen sobre otras plantas.',
    color: '#8EFFA3',
    colorDescripcion: '#5cb85c'
  }

  const dataImagenLaurel = {
    nombre: `Laurel de cera\n (Myrica cerifera)`,
    imagen: require('../../../../assets/Comuna1/LaurelComuna1.jpg'),
    descripcion: ' Árbol nativo de la región del Pacífico colombiano, utilizado en la elaboración de velas. Guamo (Inga edulis): Árbol frutal con vainas comestibles.',
    color: '#8EFFA3',
    colorDescripcion: '#5cb85c'
  }

  const dataImagenJazmin = {
    nombre: 'Jazmín (Jasminum)',
    imagen: require('../../../../assets/Comuna1/JazminComuna1.jpg'),
    descripcion: 'Enredadera trepadora con flores fragantes que florecen en primavera.',
    color: '#8EFFA3',
    colorDescripcion: '#5cb85c'
  }



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
        
       <View style={styles.contenedorImagenPlanta}>
        <ImagenPlanta info={dataImagenRosa}/>

        <PlantaImagen info={dataImagenBromelia}/>
 
        <ImagenPlanta info={dataImagenLaurel}/>

        <PlantaImagen info={dataImagenJazmin}/>

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
    flex: 1,
    top: 40,
  },

  TituloConocenos: {
    left: 20,
    fontSize: 25,
  },

  subtituloConocenos:{
      top: 3, 
      left: '8%',
      marginRight: '10%',
      fontSize: 20,
  },

  contenedorImagenPlanta: {

  }

});
