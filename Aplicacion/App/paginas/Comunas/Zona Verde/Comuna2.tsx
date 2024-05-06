import { View, Text, SafeAreaView, Pressable, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import ImagenPlanta from '../../../../Components/plantas/ImagenPlanta';
import PlantaImagen from '../../../../Components/plantas/PlantaImagen';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Comuna1 = ({navigation}: RouterProps) => {

  const dataImagenGuayacan = {
    imagen: require('../../../../assets/Comuna2/GuayacándeIndiascomuna2.png'),
    nombre: ' Guayacán de Indias (Tabebuia rosea)',
    descripcion: 'Árbol emblemático de Cali, con flores rosadas que florecen en primavera.',
    color: '#8EFFA3',
    colorDescripcion: '#5cb85c'
  }

  const dataImagenHeliconia = {
    nombre: ' Heliconia (Heliconia)',
    imagen: require('../../../../assets/Comuna2/Heliconiacomuna2.png'),
    descripcion: 'Planta tropical con flores grandes y llamativas que atraen a los colibríes.',
    color: '#8EFFA3',
    colorDescripcion: '#5cb85c'
  }

  const dataImagenOrquidea = {
    nombre: 'Orquídea (Orchidaceae)',
    imagen: require('../../../../assets/Comuna2/Orquideacomuna2.png'),
    descripcion: 'Familia diversa de flores con una gran variedad de formas, colores y tamaños.',
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
        <ImagenPlanta info={dataImagenGuayacan}/>

        <PlantaImagen info={dataImagenHeliconia}/>
 
        <ImagenPlanta info={dataImagenOrquidea}/>

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
    width: 400,
    height: 1800,
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
    bottom: 25,
  }

});
