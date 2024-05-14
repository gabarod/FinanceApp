import { useState } from 'react';
import { Product } from '../interfaces/Product';
import axios from '../utils/axios-mock';
import { ProductErrors } from '../interfaces/ProductErrors';
import { updateProduct, createProduct } from '../api/products';

const useProductForm = ({ initialProduct, isEdit }) => {
  const [product, setProduct] = useState<Product>(initialProduct);
  const [errors, setErrors] = useState<ProductErrors>({
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const validateForm = async (): Promise<boolean> => {
    let isValid = true;
    const newErrors: ProductErrors = {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    };

    if (!product.id.trim()) {
      newErrors.id = 'El ID es requerido.';
      isValid = false;
    } else if (!/^[a-zA-Z0-9]{3,10}$/.test(product.id)) {
      newErrors.id = 'El ID debe tener entre 3 y 10 caracteres alfanuméricos.';
      isValid = false;
    } else {
      const response = await axios.get(`/checkId/${product.id}`);
      if (response.data.exists) {
        newErrors.id = 'El ID ya existe.';
        isValid = false;
      }
    }

    if (!product.name.trim()) {
      newErrors.name = 'El nombre es requerido.';
      isValid = false;
    } else if (product.name.length < 5 || product.name.length > 100) {
      newErrors.name = 'El nombre debe tener entre 5 y 100 caracteres.';
      isValid = false;
    }

    if (!product.description.trim()) {
      newErrors.description = 'La descripción es requerida.';
      isValid = false;
    } else if (product.description.length < 10 || product.description.length > 200) {
      newErrors.description = 'La descripción debe tener entre 10 y 200 caracteres.';
      isValid = false;
    }

    if (!product.logo.trim()) {
      newErrors.logo = 'El logo es requerido.';
      isValid = false;
    }

    if (!product.date_release.trim()) {
      newErrors.date_release = 'La fecha de liberación es requerida.';
      isValid = false;
    } else {
      const today = new Date();
      const releaseDate = new Date(product.date_release);
      if (releaseDate < today) {
        newErrors.date_release = 'La fecha de liberación debe ser hoy o en el futuro.';
        isValid = false;
      }
    }

    if (!product.date_revision.trim()) {
      newErrors.date_revision = 'La fecha de revisión es requerida.';
      isValid = false;
    } else {
      const revisionDate = new Date(product.date_revision);
      const releaseDate = new Date(product.date_release);
      if (revisionDate < releaseDate) {
        newErrors.date_revision = 'La fecha de revisión debe ser después de la fecha de liberación.';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (name: keyof Product, value: string) => {
    setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleReset = () => {
    setProduct(initialProduct);
    setErrors({
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setErrors({
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    });
    const isValid = await validateForm();
    if (isValid) {
      const result = isEdit ? await updateProduct(product) : await createProduct(product);
      if (result) {
        console.log('Producto procesado correctamente');
      } else {
        console.error('Error al procesar el producto');
      }
      handleReset();
    }
    setLoading(false);
  };

  return {
    product,
    errors,
    handleChange,
    handleSubmit,
    validateForm,
    handleReset,
    loading,
    setLoading,
    setProduct,
  };
};

export default useProductForm;
