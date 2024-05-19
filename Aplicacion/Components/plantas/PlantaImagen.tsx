import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface PropsImagenPlanta {
  info: {
    nombre: string;
    imagen: any;
    descripcion: string;
    color: string;
    colorDescripcion: string;
  };
}

const PlantaImagen: React.FC<PropsImagenPlanta> = ({ info }) => {
  return (
    <View style={styles.body}>
      <View style={styles.columnaImagen}>
        <View style={styles.contenedorTextoImagen}>
          <Text style={styles.textoImagenLado} accessibilityLabel={`Nombre de la planta: ${info.nombre}`}>
            {info.nombre}
          </Text>
        </View>
        <View style={[styles.contenedorImagen, { backgroundColor: info.color }]}>
          <Image 
            style={styles.img} 
            source={info.imagen} 
            resizeMode="contain" 
            accessibilityLabel={`${info.nombre} image`}
          />
        </View>
      </View>
      <View style={[styles.dataPlanta, { backgroundColor: info.colorDescripcion }]}>
        <Text style={styles.textoPlanta} accessibilityLabel={`Descripción de la planta: ${info.descripcion}`}>
          {info.descripcion}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  columnaImagen: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  contenedorImagen: {
    borderRadius: 10,
    flex: 1,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,  // Cambiado a margen izquierdo
  },
  img: {
    height: '100%',
    width: '100%',
  },
  contenedorTextoImagen: {
    flex: 1,
    marginRight: 10,  // Cambiado a margen derecho
  },
  textoImagenLado: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
  dataPlanta: {
    padding: 10,
    borderRadius: 10,
  },
  textoPlanta: {
    fontSize: 17,
  },
});

export default PlantaImagen;
