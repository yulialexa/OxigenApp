import React from 'react';
import { View, Text, SafeAreaView, Pressable, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import ImagenPlanta from '../../../../Components/plantas/ImagenPlanta';
import PlantaImagen from '../../../../Components/plantas/PlantaImagen';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const PlantasYFloresZonaAzul: React.FC<RouterProps> = ({ navigation }) => {
  const dataImagenBougainvillea = {
    imagen: require('../../../../assets/PlantasYFloresZonaAzul/Bougainvillea.png'),
    nombre: 'Bougainvillea',
    descripcion: 'Árbol tropical con hojas grandes y en forma de abanico que brindan una sombra fresca. Sus frutos, las almendras de indias, son comestibles.',
    color: '#AED6F1',
    colorDescripcion: '#9ACEF1',
  };

  const dataImagenPalma = {
    nombre: 'Palma Areca',
    imagen: require('../../../../assets/PlantasYFloresZonaAzul/PalmaAreca.png'),
    descripcion: 'Una palma ornamental popular conocida por su follaje verde y plumoso. Es una planta de interior relativamente fácil de cuidar y tolera la sombra parcial',
    color: '#AED6F1',
    colorDescripcion: '#9ACEF1',
  };

  const dataImagenHelecho = {
    nombre: 'Helecho',
    imagen: require('../../../../assets/PlantasYFloresZonaAzul/Helecho.png'),
    descripcion: 'Un grupo de plantas vasculares que no producen flores ni semillas. Los helechos se caracterizan por sus frondas verdes y rizadas. Existen muchas variedades de helechos, algunos de los cuales se adaptan bien a la sombra parcial y la humedad.',
    color: '#AED6F1',
    colorDescripcion: '#9ACEF1',
  };




  const data = [
    {
      key: 'header',
      Component: (
        <SafeAreaView style={{ marginTop: '10%' }}>
          <View style={styles.iconContainer}>
            <Pressable
              onPress={() => navigation.navigate('ZonaAzul')}
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
            <ImagenPlanta info={dataImagenBougainvillea} />
            <PlantaImagen info={dataImagenPalma} />
            <ImagenPlanta info={dataImagenHelecho}/>
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

export default PlantasYFloresZonaAzul;

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
