import React, {useState, useEffect} from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import axios from '../utils/axios-mock';
import {ProductListProps} from '../interfaces/ProductListProps';
import {Product} from '../interfaces/Product';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/ProductListStyles';

const ProductList: React.FC<ProductListProps> = ({navigation}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener datos:', error);
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
      const filtered = products.filter(product =>
        product.nombre.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredProducts(filtered);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar......"
        placeholderTextColor="black"
        value={searchQuery}
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={[
              styles.item,
              index === 0 ? styles.firstItem : {},
              index === filteredProducts.length - 1 ? styles.lastItem : {},
            ]}
            onPress={() =>
              navigation.navigate('ProductDetails', {productId: item.id})
            }>
            <View style={styles.itemTextContainer}>
              <Text style={styles.text}>{item.nombre}</Text>
              <Text style={styles.smallText}>ID: {item.id}</Text>
            </View>
            <Icon name="chevron-right" size={20} color="gray" />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={[styles.button, styles.addButton]}
        onPress={() => navigation.navigate('AddProduct')}>
        <Text>Agregar Producto</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ProductList;
