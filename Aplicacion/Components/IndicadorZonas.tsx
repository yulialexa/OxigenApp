import React, { useState } from 'react';
import { View, Text, Modal, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

interface IndicadorProps {
  indicador: {
    imagen: string;
    titulo: string;
    descripcion: string;
  };
  verMasInfo: () => void;
}

const IndicadorZonas: React.FC<IndicadorProps> = ({ indicador, verMasInfo }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Animatable.Image
          animation="bounceIn"
          iterationCount="infinite"
          duration={2000}
          source={{ uri: indicador.imagen }}
          style={styles.indicador}
        />
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{indicador.titulo}</Text>
          <Text style={styles.modalDescription}>{indicador.descripcion}</Text>

          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Cerrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={verMasInfo} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Más información</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default IndicadorZonas;

const styles = StyleSheet.create({
  container: {
    top: '15%',
    right: '3%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicador: {
    width: 50,
    height: 80,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
