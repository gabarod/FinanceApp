import React from 'react';
import {View, Text, Button, Alert, StyleSheet, Modal} from 'react-native';
import {deleteProduct} from '../api/products';
import {DeleteProductProps} from '../interfaces/DeleteProductProps';
import styles from '../styles/DeleteProductModalStyles';

const DeleteProductModal: React.FC<DeleteProductProps> = ({
  productId,
  name,
  visible,
  onClose,
}) => {
  const handleDelete = async () => {
    const result = await deleteProduct(productId);
    if (result) {
      Alert.alert('Producto eliminado exitosamente!');
      onClose();
    } else {
      Alert.alert('Error eliminando el producto');
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <Text>Estás seguro de eliminar el producto {name}?</Text>
          <Button title="Confirmar" onPress={handleDelete} />
          <Button title="Cancelar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default DeleteProductModal;
