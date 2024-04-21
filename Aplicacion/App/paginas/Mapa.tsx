import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../Firebase/config';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Mapa = ({ navigation }: RouterProps) => {
  return (
    
    <View >
      <Pressable
        onPress={() => FIREBASE_AUTH.signOut()}
        style={({ pressed }) => {
          return { opacity: pressed ? 0 : 1 };
        }}>
        <Image style={styles.icon} source={require('../../assets/atras.png')} />
      </Pressable>

      <View style={styles.mapContainer}>
        <Image style={styles.mapaStyle} source={require("../../assets/MAPA OXIGENAPP.png")} />
      </View>
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
    height: 460,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  mapaStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});
