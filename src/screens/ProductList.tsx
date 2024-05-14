import React, {useState, useEffect} from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import {ProductListProps} from '../interfaces/ProductListProps';
import {Product} from '../interfaces/Product';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/ProductListStyles';
import { BASE_URL, getProductList } from '../api/products';
import axios from '../utils/axios-mock';

const ProductList: React.FC<ProductListProps> = ({navigation}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>();
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/bp/products`, {
          headers: {
            'Content-Type': 'application/json',
            'authorId': '123123123',
          },
        });
        setLoading(false);
        const newProducts = response.data;
        console.log('newProducts', newProducts);
        setFilteredProducts(newProducts || []);
        setProducts(newProducts || []);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);


  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products?.filter(product =>
        product.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredProducts(filtered);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <View style={styles.container}>
      { !!products && products?.length > 0 ? (
      <>
      <TextInput
        placeholder="Buscar......"
        placeholderTextColor="black"
        value={searchQuery}
        onChangeText={handleSearch}
        style={styles.searchInput}
      /><FlatList
        data={filteredProducts}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.item,
              index === 0 ? styles.firstItem : {},
              index === filteredProducts.length - 1 ? styles.lastItem : {},
            ]}
            onPress={() => navigation.navigate('ProductDetails', { productId: item.id })}>
            <View style={styles.itemTextContainer}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.smallText}>ID: {item.id}</Text>
            </View>
            <Icon name="chevron-right" size={20} color="gray" />
          </TouchableOpacity>
        )} />
        </>
      ) : ( <Text style={styles.notFoundtext}>No hay productos</Text>)}
      <TouchableOpacity
          style={[styles.button, styles.addButton]}
          onPress={() => navigation.navigate('AddProduct')}>
          <Text>Agregar Producto</Text>
        </TouchableOpacity>
    </View>
  );
};


export default ProductList;
