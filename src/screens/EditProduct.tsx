import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import axios from '../utils/axios-mock';
import {EditProductProps} from '../interfaces/EditProductProps';
import {Product} from '../interfaces/Product';
import useProductForm from '../hooks/useProductForm';
import ProductForm from '../components/ProductForm';
import styles from '../styles/EditProductStyles';
import { getProductById } from '../api/products';

const EditProduct: React.FC<EditProductProps> = ({route}) => {
  const {productId} = route.params;
  console.log('productId',productId);
  const initialProduct: Product = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: '',
  };
  const {
    product,
    handleChange,
    handleReset,
    handleSubmit,
    setProduct,
    setLoading,
    loading,
    errors,
  } = useProductForm({initialProduct, isEdit: true});

  useEffect(() => {
    const fetchProduct = async () => {
      const newProduct = await getProductById(productId);
      setProduct(newProduct || initialProduct);
      setLoading(false);
    };
    setLoading(true);
    fetchProduct(); 

  }, [productId]);

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Formulario de Edición {productId}</Text>
      <ProductForm
        isEditing={true}
        errors={errors}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleReset={handleReset}
        product={product}
      />
      <TouchableOpacity
        style={[styles.button, styles.updateButton]}
        onPress={handleSubmit}>
        <Text>Actualizar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProduct;
