import { NavigationProp } from '@react-navigation/native';
import { View, Text, Pressable, StyleSheet, SafeAreaView, Image} from 'react-native'
import React from 'react'

interface RouterProps {
  navigation: NavigationProp<any, any>;
}


const ZonaRosa = ({navigation}: RouterProps) => {
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

      <Text style={styles.titulo} >ZONA ROSA</Text>

      <View style={styles.fertilidadContainer}>       
      <Text style={styles.fertilidadText}>En esta zona los suelos arcillosos con buena retención de humedad. Son aptos para una variedad de árboles y plantas que toleran la humedad.
      Precauciones:Se recomienda mejorar el drenaje en algunas zonas para evitar problemas de encharcamiento.</Text>
      </View>
      
      </SafeAreaView>
    </View>
  )
}

export default ZonaRosa

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
