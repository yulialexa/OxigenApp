import React, { useState } from 'react';
import { View, Text, Modal, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

interface IndicadorProps {
  indicador: {
    imagen: any;
    titulo: string;
    descripcion: string;
    inicio: number;
    duracion: number;
  };
  verMasInfo: () => void;
}

const IndicadorZonas: React.FC<IndicadorProps> = ({ indicador, verMasInfo }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <View style={styles.touchableView}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Animatable.Image
            animation="bounceIn"
            iterationCount="infinite"
            duration={indicador.duracion}
            delay={indicador.inicio}
            source={indicador.imagen}
            style={styles.indicador}
          />
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{indicador.titulo}</Text>
          <Text style={styles.modalDescription}>{indicador.descripcion}</Text>

          <TouchableOpacity onPress={cerrarModal} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Cerrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { cerrarModal(); verMasInfo(); }} style={[styles.modalButton, styles.infoButton]}>
            <Text style={styles.modalButtonText}>Más información</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default IndicadorZonas;

const styles = StyleSheet.create({
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
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  touchableView: {
    alignItems: 'center',
  },
  infoButton: {
    backgroundColor: '#5cb85c', // Cambio de color para el botón de información
  },
});
