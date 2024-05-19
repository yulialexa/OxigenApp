import { View, Text, SafeAreaView, Pressable, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import ImagenPlanta from '../../../../Components/plantas/ImagenPlanta';
import PlantaImagen from '../../../../Components/plantas/PlantaImagen';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Comuna20 = ({navigation}: RouterProps) => {

  const dataImagenAguacate = {
    imagen: require('../../../../assets/Comuna20/AguacateComun20.png'),
    nombre: 'Aguacate (Persea americana)',
    descripcion: 'Árbol frutal con un fruto verde cremoso y nutritivo. ',
    color: '#8EFFA3',
    colorDescripcion: '#5cb85c'
  }

  const dataImagenMango = {
    nombre: 'Mango (Mangifera indica)',
    imagen: require('../../../../assets/Comuna20/MangoComuna20.png'),
    descripcion: 'Árbol frutal tropical con frutos deliciosos.',
    color: '#8EFFA3',
    colorDescripcion: '#5cb85c'
  }

  const dataImagenClavel = {
    nombre: 'Clavel (Dianthus caryophyllus)',
    imagen: require('../../../../assets/Comuna20/ClavelComuna20.png'),
    descripcion: 'Flor popular con una amplia gama de colores y significados.',
    color: '#8EFFA3',
    colorDescripcion: '#5cb85c'
  }

  const dataImagenLilium = {
    nombre: '  Lilium (Lilium)',
    imagen: require('../../../../assets/Comuna20/LiliumComuna20.png'),
    descripcion: 'Flor elegante con un aroma fragante.',
    color: '#8EFFA3',
    colorDescripcion: '#5cb85c'
  }

  const dataImagenPalma = {
    nombre: 'Palma de cera (Ceroxylon quindiuense)',
    imagen: require('../../../../assets/Comuna20/Palmadeceracomuna20.png'),
    descripcion: 'Palma nativa de la región andina de Colombia, símbolo nacional del país.',
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
        <ImagenPlanta info={dataImagenAguacate}/>

        <PlantaImagen info={dataImagenMango}/>
 
        <ImagenPlanta info={dataImagenClavel}/>

        <PlantaImagen info={dataImagenLilium}/>

        <ImagenPlanta info={dataImagenPalma}/>

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

export default Comuna20

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
