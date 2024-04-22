import { View, Text, SafeAreaView, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const ZonaVerde = ({navigation}: RouterProps) => {
  return (
    <View>
      
      <SafeAreaView style={{ marginTop: '10%' }}>

      <View style={styles.iconContainer}>
      <Pressable
              onPress={() => navigation.navigate('Mapa')}
              style={({ pressed }) => {
                return { opacity: pressed ? 0 : 1 };
              }}>
              <Image style={styles.icon} source={require('../../../assets/atras.png')} />
        </Pressable>
      </View>

      <Text style={styles.titulo} >ZONA VERDE</Text>

      <View style={styles.fertilidadContainer}>       
      <Text style={styles.fertilidadText}>Posee una fertilidad alta gracias a sus suelos ricos en nutrientes, clima favorable, abundancia de agua y acceso a tecnología agrícola.</Text>
      </View>
      
      </SafeAreaView>
    </View>
  )
}

export default ZonaVerde


const styles = StyleSheet.create({
  icon: {
    margin: 10,
    width: 35,
    height: 25,
    top: 1,
  },
  titulo: {
    textAlign: 'center',
    alignSelf: 'center'
  },
  iconContainer: {
    width: 35,
    height: 25,
    margin: 10,
    top: 1,
  },
  fertilidadContainer: {
    backgroundColor: '#FADDF7', // color rosa pálid
    alignSelf: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: '70%'
  },
  fertilidadText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333', // color del texto
  },
});
