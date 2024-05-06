import { View, Text, SafeAreaView, Pressable, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import ImagenPlanta from '../../../../Components/plantas/ImagenPlanta';
import PlantaImagen from '../../../../Components/plantas/PlantaImagen';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Comuna11 = ({navigation}: RouterProps) => {

  const dataImagenCastaño = {
    imagen: require('../../../../assets/Comuna11/CastañoComuna11.png'),
    nombre: 'Castaño (Castanea sativa)',
    descripcion: 'Árbol frondoso que proporciona sombra y produce frutos comestibles, las castañas. Los castaños prefieren suelos ácidos y húmedos, y toleran la sombra parcial.',
    color: '#8EFFA3',
    colorDescripcion: '#5cb85c'
  }

  const dataImagenLavanda = {
    nombre: 'La lavanda',
    imagen: require('../../../../assets/Comuna11/ArbustoLavandacomuna11.png'),
    descripcion: 'La lavanda es conocida por su fragancia relajante y sus propiedades calmantes. Es una planta resistente que tolera la sequía y el calor, y se adapta bien al clima de Cali.',
    color: '#8EFFA3',
    colorDescripcion: '#5cb85c'
  }

  const dataImagenTrepador = {
    nombre: 'Las Buganvillas',
    imagen: require('../../../../assets/Comuna11/ArbustotrepadorComuna11.png'),
    descripcion: ' Las buganvillas son muy adaptables a diferentes condiciones de suelo y luz solar, y son una adición vibrante a cualquier jardín o terraza.',
    color: '#8EFFA3',
    colorDescripcion: '#5cb85c'
  }

  const dataImagenNarcisos = {
    nombre: 'Narcisos (Narcissus)',
    imagen: require('../../../../assets/Comuna11/NarcisosComuna11.png'),
    descripcion: 'Flores bulbosas con flores amarillas o blancas con forma de trompeta. Los narcisos necesitan pleno sol o sombra parcial y un suelo bien drenado.',
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
        <ImagenPlanta info={dataImagenCastaño}/>

        <PlantaImagen info={dataImagenLavanda}/>
 
        <ImagenPlanta info={dataImagenTrepador}/>

        <PlantaImagen info={dataImagenNarcisos}/>

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

export default Comuna11

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
