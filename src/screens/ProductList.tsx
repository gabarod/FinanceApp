import React, {useState, useEffect} from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  View,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {ProductListProps} from '../interfaces/ProductListProps';
import {Product} from '../interfaces/Product';
import styles from '../styles/ProductListStyles';
import { BASE_URL } from '../api/products';
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
        const newProducts = response.data;
        setProducts(newProducts);
        setFilteredProducts(newProducts);

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
      
      <TextInput
        placeholder="Buscar..."
        placeholderTextColor="black"
        value={searchQuery}
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
      { filteredProducts && filteredProducts?.length > 0 ? (
      <SafeAreaView>
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={item.id}
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
            {/* <Icon name="chevron-small-right" size={20} color="gray" /> */}
            <Text style={styles.text}>{'>'}</Text>
          </TouchableOpacity>
        )} />
        </SafeAreaView>
      ) : ( <Text style={styles.notFoundtext}>No hay productos</Text>)}
        <View style={styles.footer}>
      <TouchableOpacity
          style={[styles.button, styles.addButton]}
          onPress={() => navigation.navigate('AddProduct')}>
          <Text>Agregar Producto</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};


export default ProductList;
