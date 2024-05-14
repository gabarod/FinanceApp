import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import axios from '../utils/axios-mock';
import {ProductDetailsProps} from '../interfaces/ProductDetailsProps';
import {Product} from '../interfaces/Product';
import DeleteProductModal from './DeleteProductModal';
import styles from '../styles/ProductDetailsStyles';
import { getProductById } from '../api/products';

const ProductDetails: React.FC<ProductDetailsProps> = ({navigation, route}) => {
  const {productId} = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const initialProduct: Product = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: '',
  };
  useEffect(() => {
    const fetchProduct = async () => {
      const newProduct = await getProductById(productId);
      setProduct(newProduct || initialProduct);
      setLoading(false);
    };
    setLoading(true);
    fetchProduct(); 

  }, [productId]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {product ? (
          <>
            <View style={styles.header}>
              <Text style={styles.title}>ID: {productId}</Text>
              <Text style={styles.subtitle}>Información extra</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.fieldName}>Nombre:</Text>
              <Text style={styles.fieldValue}>{product.name}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.fieldName}>Descripción:</Text>
              <Text style={styles.fieldValue}>{product.description}</Text>
            </View>
            <Image source={{uri: product.logo}} style={styles.logo} />
            <View style={styles.detailRow}>
              <Text style={styles.fieldName}>Fecha Liberación:</Text>
              <Text style={styles.fieldValue}>{product.date_release}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.fieldName}>Fecha Revisión:</Text>
              <Text style={styles.fieldValue}>{product.date_revision}</Text>
            </View>
          </>
        ) : (
          <Text>Producto no encontrado.</Text>
        )}
      </ScrollView>
      {product && (
        <>
          <View style={styles.footer}>
            <TouchableOpacity
              style={[styles.button, styles.editButton]}
              onPress={() => navigation.navigate('EditProduct', {productId})}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.deleteButton]}
              onPress={toggleModal}>
              <Text style={styles.buttonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
          <DeleteProductModal
            productId={product.id}
            name={product.name}
            visible={modalVisible}
            onClose={onCloseModal}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default ProductDetails;

