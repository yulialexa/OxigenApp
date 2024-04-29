import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

interface PlantaImagenProps {
  info: {
    titulo: string; // Use string type for clarity
    descripcion: string;
    imagen: any;
  };
}

const PlantaImagen: React.FC<PlantaImagenProps> = ({ info }) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo} >{info.titulo}</Text>
      <Text style={styles.descripcion}>{info.descripcion}</Text>
      <Image source={info.imagen} style={styles.imagen} />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    width: '40%',
    height: 250,
    marginTop: '2%',
    padding: 9,
    alignSelf: 'center',
    backgroundColor: '#5cb85c',
    alignItems: 'center', // Center elements horizontally
     // Center elements vertically
     borderRadius: 10,
  },
  imagen: {
    marginTop: '7%',
    width: 140,
    height: 130,
  },
  titulo: {
    fontSize: 27,
  },
  descripcion: {
    marginTop: '2%',
    fontSize: 20
  }
})

export default PlantaImagen;
