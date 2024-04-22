import { NavigationProp } from '@react-navigation/native';
import { View, Text, Pressable, StyleSheet, SafeAreaView, Image} from 'react-native'
import React from 'react'

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const ZonaAzul = ({navigation}: RouterProps) => {
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

      <Text style={styles.titulo} >ZONA AZUL</Text>

      <View style={styles.fertilidadContainer}>       
      <Text style={styles.fertilidadText}>Predominan los suelos aluviales, ricos en nutrientes y con buen drenaje. Son aptos para una gran variedad de árboles y plantas.
      Precauciones:En algunas zonas, el suelo puede ser susceptible a la erosión. Se recomienda usar técnicas de conservación de suelos como la cobertura vegetal.</Text>
      </View>
      
      </SafeAreaView>
    </View>
  )
}

export default ZonaAzul

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