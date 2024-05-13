import {Product} from '../interfaces/Product';

const BASE_URL =
  'https://tribu-ti-staffing-desarrollo-afangwbmcruchqfh.201.azurefd.net/api-t-msa-productosfinancieros';

export const getProductList = async () => {
  try {
    const response = await fetch(`${BASE_URL}/bp/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorId: 'author-id',
      },
    });
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};

export const getProductById = async (productId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/bp/products/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorId: 'author-id',
      },
    });
    const product = await response.json();
    return product;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return null;
  }
};

export const createProduct = async (product: Product) => {
  try {
    const response = await fetch(`${BASE_URL}/bp/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorId: 'author-id',
      },
      body: JSON.stringify(product),
    });
    return response.ok;
  } catch (error) {
    console.error('Failed to create product:', error);
    return {success: false};
  }
};

export const updateProduct = async (product: Product) => {
  try {
    const response = await fetch(`${BASE_URL}/bp/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorId: 'author-id',
      },
      body: JSON.stringify(product),
    });
    return response.ok;
  } catch (error) {
    console.error('Failed to update product:', error);
    return {success: false};
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/bp/products/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorId: 'author-id',
      },
    });
    return response.ok;
  } catch (error) {
    console.error('Failed to delete product:', error);
    return {success: false};
  }
};
