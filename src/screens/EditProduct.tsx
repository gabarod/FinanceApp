import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import axios from '../utils/axios-mock';
import {EditProductProps} from '../interfaces/EditProductProps';
import {Product} from '../interfaces/Product';
import useProductForm from '../hooks/useProductForm';
import ProductForm from '../components/ProductForm';
import styles from '../styles/EditProductStyles';

const EditProduct: React.FC<EditProductProps> = ({route}) => {
  const {productId} = route.params;
  const initialProduct: Product = {
    id: '',
    nombre: '',
    descripcion: '',
    logoUrl: '',
    fechaLiberacion: '',
    fechaRevision: '',
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
    axios
      .get(`/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error: any) => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Formulario de Edición</Text>
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
