import { View, Text, Image, Pressable, StyleSheet, Animated, SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../Firebase/config';
import IndicadorZonas from '../../Components/IndicadorZonas';


interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Mapa = ({ navigation }: RouterProps) => {

  const indicadorData = {
    imagen: '../../assets/zonaVerde.png',
    titulo: 'Título del indicador',
    descripcion: 'Descripción del indicador',
  };

  const handleVerMasInfo = () => {
    return navigation.navigate('Login')
  };

  return (
    
    <View >
      <SafeAreaView style={{marginTop: '10%' }}> 

      <Pressable
        onPress={() => FIREBASE_AUTH.signOut()}
        style={({ pressed }) => {
          return { opacity: pressed ? 0 : 1 };
        }}>
        <Image style={styles.icon} source={require('../../assets/atras.png')} />
      </Pressable>
      


        
      <View style={styles.mapContainer}>
      <IndicadorZonas indicador={indicadorData} verMasInfo={handleVerMasInfo} />
        <Image style={styles.mapaStyle} source={require("../../assets/MAPA OXIGENAPP.png")} />

      </View>

      </SafeAreaView>
    </View>
  );
};

export default Mapa;

const styles = StyleSheet.create({

  icon: {
    margin: 10,
    width: 35,
    height: 25,
    top: 1,
  },
  mapContainer: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'black',
    width: 350,
    height: 560,
    top: 20,
    
    alignItems: 'center',
    justifyContent: 'center',

  },

  mapaStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    zIndex: -1,
  },
});
