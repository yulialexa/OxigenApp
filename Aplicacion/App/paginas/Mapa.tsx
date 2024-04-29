import { View, Text, Image, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../Firebase/config';
import IndicadorZonas from '../../Components/IndicadorZonas';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Mapa = ({ navigation }: RouterProps) => {
  const indicadorVerde = {
    imagen: require('../../assets/zonaVerde.png'), // Cambio aquí
    titulo: 'Zonas Verdes de Cali',
    comuna: ['1', '2', '11', '20'],
    inicio: 800,
    duracion: 3000
  };

  const indicadorRosa = {
    imagen: require('../../assets/zonaRosada.png'), // Cambio aquí
    titulo: 'Zonas Poco Fertilizadas',
    comuna: ['3', '9', '10', '12', '13', '14', '15', '16', '18', '21'],
    inicio: 1500,
    duracion: 3000
  };

  const indicadorAzul = {
    imagen: require('../../assets/zonaAzul.png'), // Cambio aquí
    titulo: 'Zona de Renamiento Verde',
    comuna: ['4', '5', '6', '7', '8', '17', '19', '22'],
    inicio: 2100,
    duracion: 3000
  };

  const handleVerMasInfoVerde = () => {
    return navigation.navigate('ZonaVerde')
  };

  const handleVerMasInfoRosa = () => {
    return navigation.navigate('ZonaRosa')
  };

  const handleVerMasInfoAzul = () => {
    return navigation.navigate('ZonaAzul')
  };

  return (
    <View>
      <SafeAreaView style={{ marginTop: '10%' }}>
        <View style={styles.iconContainer}>
          <Pressable
            onPress={() => FIREBASE_AUTH.signOut()}
            style={({ pressed }) => {
              return { opacity: pressed ? 0 : 1 };
            }}>
            <Image style={styles.icon} source={require('../../assets/atras.png')} />
          </Pressable>
        </View>

        <View style={styles.textoContainer}>
          <Text style={styles.titulo}>Tipo de fertilidad</Text>
          <Text style={styles.textotitulo}>¡Presiona cualquiera de las Zonas y averigua qué puedes plantar en tu zona!</Text> 
        </View>

        <View style={styles.mapContainer}>
          <View style={styles.ZonaVerde}>
            <IndicadorZonas indicador={indicadorVerde} verMasInfo={handleVerMasInfoVerde} />
          </View>

          <View style={styles.ZonaRosa}>
            <IndicadorZonas indicador={indicadorRosa} verMasInfo={handleVerMasInfoRosa} />
          </View>

          <View style={styles.ZonaAzul}>
            <IndicadorZonas indicador={indicadorAzul} verMasInfo={handleVerMasInfoAzul} />
          </View>

          <Image style={styles.mapaStyle} source={require("../../assets/MAPA OXIGENAPP.png")} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Mapa;

const styles = StyleSheet.create({
  titulo:{
    fontWeight : 'bold',
    alignSelf: 'center',
  },
  textotitulo:{
    top: '10%'
  },
  textoContainer:{
    backgroundColor: '#FFFFFF', // color rosa pálid
    alignContent: 'center',
    padding: 10,
    borderRadius: 8,
    left: '7%',
    width: '85%'
  },
  ZonaVerde: {
    top: '10%',
    right: '3%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ZonaRosa: {
    top: '32%',
    left: '26%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ZonaAzul: {
    top: '55%',
    right: '10%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  iconContainer: {
    width: 35,
    height: 25,
    margin: 10,
    top: 1,
    marginBottom: 40
  },
});
