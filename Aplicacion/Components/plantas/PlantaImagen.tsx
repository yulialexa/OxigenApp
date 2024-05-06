import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

interface propsImagenPlanta {
    info: {
        nombre: string;
        imagen: any;
        descripcion: string;
        color: string;
        colorDescripcion: string;
    }
}

const PlantaImagen: React.FC<propsImagenPlanta> = ({info}) => {
  return (
    <View style={styles.body}> 

    <View style={styles.columnaImagen}>
      <Text style={styles.textoImagenLado}> {info.nombre} </Text>
        <View style={[styles.contenedorImagen, {backgroundColor: `${info.color}`}]}>
        <Image style={styles.img} source={info.imagen}/>
      </View>
    </View>

    <View style={[styles.dataPlanta, {backgroundColor: `${info.colorDescripcion}`}]}>
          <Text style={styles.textoplanta}>{info.descripcion}</Text>
    </View>
  </View>
  )
}


const styles = StyleSheet.create({

    body: {
      bottom: '2%',
      width: 360,
      height: 250,
      alignSelf: 'center',
      marginBottom: 70,
    },
  
  
    columnaImagen: {
      top: '20%',
      marginBottom: '12%',
      height: '80%',
      width: '70%',
      flexDirection: 'row',
      alignItems: 'center',
  },
  
      contenedorImagen:{
      borderRadius: 10,
      backgroundColor: '#5cb85c',
      left: '10%',
      width: 210,
      height: 250,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    img:{
        height: '90%',
        width: '80%',
    } ,
  
    textoImagenLado: {  
      width: '50%',
      fontSize: 17,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    dataPlanta: {
      top: '30%',
      right: '2%',
      width: '100%',
      padding: '2%',
      backgroundColor: '#5cb85c',
    },
    textoplanta: {
      fontSize: 17
    }
  
  });
  

  export default PlantaImagen