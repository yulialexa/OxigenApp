import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface PropsImagenPlanta {
  info: {
    imagen: any;
    nombre: string;
    descripcion: string;
    color: string;
    colorDescripcion: string;
  };
}

const ImagenPlanta: React.FC<PropsImagenPlanta> = ({ info }) => {
  return (
    <View style={styles.body}>
      <View style={styles.columnaImagen}>
        <View style={[styles.contenedorImagen, { backgroundColor: info.color }]}>
          <Image style={styles.img} source={info.imagen} resizeMode="contain" />
        </View>
        <View style={styles.contenedorTextoImagen}>
          <Text style={styles.textoImagenLado}>{info.nombre}</Text>
        </View>
      </View>
      <View style={[styles.dataPlanta, { backgroundColor: info.colorDescripcion }]}>
        <Text style={styles.textoPlanta}>{info.descripcion}</Text>
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
    marginRight: 10,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  contenedorTextoImagen: {
    flex: 1,
    marginLeft: 10,
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

export default ImagenPlanta;
