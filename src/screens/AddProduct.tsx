import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import useProductForm from '../hooks/useProductForm';
import {Product} from '../interfaces/Product';
import ProductForm from '../components/ProductForm';
import styles from '../styles/AddProductStyles';

const AddProduct = () => {
  const initialProduct: Product = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: '',
  };

  const {product, errors, handleChange, handleSubmit, handleReset} =
    useProductForm({initialProduct, isEdit: false});

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Formulario de Registro</Text>
        <ProductForm
          isEditing={false}
          errors={errors}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleReset={handleReset}
          product={product}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.sendButton]}
          onPress={handleSubmit}>
          <Text>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={handleReset}>
          <Text>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddProduct;
