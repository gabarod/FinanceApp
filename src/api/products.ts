import axios from 'axios';
import { Product } from '../interfaces/Product';

export const BASE_URL = 'http://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';

export const getProductList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/bp/products`, {
      headers: {
        'Content-Type': 'application/json',
        authorId: '123123123',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};

export const getProductById = async (productId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/bp/products/${productId}`, {
      headers: {
        'Content-Type': 'application/json',
        authorId: '123123123',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return null;
  }
};

export const createProduct = async (product: Product) => {
  try {
    const response = await axios.post(`${BASE_URL}/bp/products`, product, {
      headers: {
        'Content-Type': 'application/json',
        authorId: '123123123',
      },
    });
    return response.status === 200;
  } catch (error) {
    console.error('Failed to create product:', error);
    return { success: false };
  }
};

export const updateProduct = async (product: Product) => {
  try {
    const response = await axios.put(`${BASE_URL}/bp/products/${product.id}`, product, {
      headers: {
        'Content-Type': 'application/json',
        authorId: '123123123',
      },
    });
    return response.status === 200;
  } catch (error) {
    console.error('Failed to update product:', error);
    return { success: false };
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/bp/products/${productId}`, {
      headers: {
        'Content-Type': 'application/json',
        authorId: '123123123',
      },
    });
    return response.status === 200;
  } catch (error) {
    console.error('Failed to delete product:', error);
    return { success: false };
  }
};