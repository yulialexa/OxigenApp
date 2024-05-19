import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';

interface botonProps {
    info: {
    Titulo : String;
    funcion: () => void;
    color: String;
    }
}

const BotonComuna: React.FC<botonProps> = ({info}) => {

    const styles = StyleSheet.create({
        contenedorBoton: {
            margin: 10,
            padding: 2,
            width: 150,
            height: 150,
            borderRadius: 10,
            backgroundColor: `${info.color}`,
            alignItems: 'center',
            justifyContent: 'center',
        },
        texto: {
          textAlign: 'center'
        }
    })


  return (
    <TouchableOpacity style={styles.contenedorBoton} onPress={info.funcion}>
    <View>
          <Text style= {styles.texto}>{info.Titulo}</Text>
    </View>
  </TouchableOpacity>
  )
}



export default BotonComuna