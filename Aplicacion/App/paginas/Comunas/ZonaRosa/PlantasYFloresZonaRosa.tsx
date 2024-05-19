import React from 'react';
import { View, Text, SafeAreaView, Pressable, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import ImagenPlanta from '../../../../Components/plantas/ImagenPlanta';
import PlantaImagen from '../../../../Components/plantas/PlantaImagen';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const PlantasYFloresZonaRosa: React.FC<RouterProps> = ({ navigation }) => {
  const dataImagenAlmendro = {
    imagen: require('../../../../assets/PlantasYFloresZonaRosa/Almendro.png'),
    nombre: 'Almendro (Terminalia catappa)',
    descripcion: 'Árbol tropical con hojas grandes y en forma de abanico que brindan una sombra fresca. Sus frutos, las almendras de indias, son comestibles.',
    color: '#FADDF7',
    colorDescripcion: '#FFBFF9',
  };

  const dataImagenBegonias = {
    nombre: 'Begonias',
    imagen: require('../../../../assets/PlantasYFloresZonaRosa/begonias.png'),
    descripcion: 'Las begonias son un grupo de flores que se encuentran en todo el mundo. Son conocidas por sus flores coloridas y sus hojas decorativas. Las begonias son plantas de interior y exterior populares y se pueden cultivar en una variedad de condiciones de luz.',
    color: '#FADDF7',
    colorDescripcion: '#FFBFF9',
  };

  const dataImagenFicus = {
    nombre: 'Ficus',
    imagen: require('../../../../assets/PlantasYFloresZonaRosa/Ficus.png'),
    descripcion: 'Género de árboles y arbustos con gran diversidad de especies, algunos de los cuales son ideales para el oriente de Cali. El Ficus benjamina, por ejemplo, es un árbol de interior popular conocido por sus hojas grandes y brillantes. El Ficus elastica, por otro lado, es un árbol de interior o exterior que tolera la sombra y la sequía.',
    color: '#FADDF7',
    colorDescripcion: '#FFBFF9',
  };


  const dataImagenStrelitzia = {
    nombre: 'Strelitzia reginae (Ave del paraíso)',
    imagen: require('../../../../assets/PlantasYFloresZonaRosa/AveDelParaiso.png'),
    descripcion: 'Conocida por sus flores parecidas a la cabeza de un ave exótica, esta planta agrega un toque único a cualquier jardín. Necesita sol parcial a pleno y riego moderado.',
    color: '#FADDF7',
    colorDescripcion: '#FFBFF9',
  };

  const dataImagenIxora  = {
    nombre: 'Ixora',
    imagen: require('../../../../assets/PlantasYFloresZonaRosa/Ixora.png'),
    descripcion: 'Esta planta tropical florece durante todo el año con racimos de flores tubulares en rojo, naranja, rosa o blanco. Requiere pleno sol a sombra parcial y riego regular.',
    color: '#FADDF7',
    colorDescripcion: '#FFBFF9',
  };

  const dataImagenHiedra  = {
    nombre: 'Hiedra (Hedera helix)',
    imagen: require('../../../../assets/PlantasYFloresZonaRosa/Hiedra.png'),
    descripcion: 'Esta enredadera trepadora o colgante es perfecta para cubrir cercas, muros o crear cascadas verdes. Tolera la sombra y una variedad de condiciones de suelo.',
    color: '#FADDF7',
    colorDescripcion: '#FFBFF9',
  };


  const dataImagenFilodendro = {
    nombre: 'Filodendro (Philodendron)',
    imagen: require('../../../../assets/PlantasYFloresZonaRosa/Filodentro.png'),
    descripcion: 'Este género incluye plantas trepadoras, colgantes o de interior que ofrecen una gran variedad de formas y tamaños de hojas. Prefieren luz indirecta brillante a sombra parcial y suelo húmedo pero bien drenado.',
    color: '#FADDF7',
    colorDescripcion: '#FFBFF9',
  };




  const data = [
    {
      key: 'header',
      Component: (
        <SafeAreaView style={{ marginTop: '10%' }}>
          <View style={styles.iconContainer}>
            <Pressable
              onPress={() => navigation.navigate('ZonaRosa')}
              style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
            >
              <Image style={styles.icon} source={require('../../../../assets/atras.png')} />
            </Pressable>
          </View>
        </SafeAreaView>
      ),
    },
    {
      key: 'body',
      Component: (
        <View style={styles.body}>
          <Text style={styles.TituloConocenos}>Conócenos</Text>
          <Text style={styles.subtituloConocenos}>
            ¡Consulta qué tipo de plantas adornan hoy la Sucursal del Cielo!
          </Text>
          <View style={styles.contenedorImagenPlanta}>
            <ImagenPlanta info={dataImagenAlmendro} />
            <PlantaImagen info={dataImagenBegonias} />
            <ImagenPlanta info={dataImagenFicus}/>
            <PlantaImagen info={dataImagenStrelitzia} />
            <ImagenPlanta info={dataImagenIxora}/>
            <PlantaImagen info={dataImagenFilodendro} />
            <ImagenPlanta info={dataImagenHiedra}/>
          </View>
        </View>
      ),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {data.map((item) => (
        <View key={item.key}>{item.Component}</View>
      ))}
    </ScrollView>
  );
};

export default PlantasYFloresZonaRosa;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  icon: {
    margin: 10,
    width: 35,
    height: 25,
  },
  iconContainer: {
    width: 35,
    height: 25,
    margin: 10,
  },
  body: {
    flex: 1,
    padding: 20,
  },
  TituloConocenos: {
    fontSize: 25,
    marginBottom: 10,
  },
  subtituloConocenos: {
    fontSize: 20,
    marginBottom: 20,
  },
  contenedorImagenPlanta: {
    marginBottom: 25,
  },
});
