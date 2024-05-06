import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

interface propsImagenPlanta {
    info: {
        imagen: any;
        nombre: string;
        descripcion: string;
        color: string;
        colorDescripcion: string;
    }
}

const ImagenPlanta: React.FC<propsImagenPlanta> = ({info}) => {
  return (
    <View style={styles.body}> 

    <View style={styles.columnaImagen}>
        <View style={[styles.contenedorImagen, {backgroundColor: `${info.color}`}]}>
        <Image style={styles.img} source={info.imagen}/>
      </View>
      <Text style={styles.textoImagenLado}> {info.nombre} </Text>
    </View>

    <View style={[styles.dataPlanta, {backgroundColor: `${info.colorDescripcion}`}]}>
          <Text style={styles.textoplanta}>{info.descripcion}</Text>
    </View>
  </View>
  )
}


const styles = StyleSheet.create({

    body: {
      width: 400,
      height: 420,
      bottom: '2%',
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: 60,

    },
  
    TituloConocenos: {
      left: '5%',
      fontSize: 25,
    },
  
  
    columnaImagen: {
      top: '20%',
      height: 'auto',
      width: '90%',
      flexDirection: 'row',
      alignItems: 'center', 


  },
  
    contenedorImagen:{
      borderRadius: 10,
      width: 210,
      height: 250,
      left: '5%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    img:{
        height: '90%',
        width: '80%',
    } ,

    textoImagenLado: {  
      width: '50%',
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 'bold',
    },

    dataPlanta: {
      top: 100,
      left: '6%',
      width: '90%',
      height: 'auto',
      padding: '2%',
    },
    textoplanta: {
      fontSize: 17
    }
  
  });
  

  export default ImagenPlanta