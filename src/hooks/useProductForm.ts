import {useState} from 'react';
import {Product} from '../interfaces/Product';
import axios from '../utils/axios-mock';
import {ProductErrors} from '../interfaces/ProductErrors';
import {updateProduct} from '../api/products';
import {createProduct} from '../api/products';

const useProductForm = ({initialProduct, isEdit}) => {
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

    if (!product.id) {
      newErrors.id = 'El ID es requerido.';
      isValid = false;
    } else if (product.id.length < 3 || product.id.length > 10) {
      newErrors.id = 'El ID debe tener entre 3 y 10 caracteres.';
      isValid = false;
    } else {
      const response = await axios.get(`/checkId/${product.id}`);
      if (response.data.exists) {
        newErrors.id = 'El ID ya existe.';
        isValid = false;
      }
    }

    if (!product.name) {
      newErrors.name = 'El name es requerido.';
      isValid = false;
    } else if (product.name.length < 5 || product.name.length > 100) {
      newErrors.name = 'El name debe tener entre 5 y 100 caracteres.';
      isValid = false;
    }

    if (!product.description) {
      newErrors.description = 'La descripción es requerida.';
      isValid = false;
    } else if (
      product.description.length < 10 ||
      product.description.length > 200
    ) {
      newErrors.description =
        'La descripción debe tener entre 10 y 200 caracteres.';
      isValid = false;
    }

    if (!product.logo) {
      newErrors.logo = 'El logo es requerido.';
      isValid = false;
    }

    if (!product.date_release) {
      newErrors.date_release = 'La fecha de liberación es requerida.';
      isValid = false;
    } else {
      const today = new Date();
      const releaseDate = new Date(product.date_release);
      if (releaseDate < today) {
        newErrors.date_release =
          'La fecha de liberación debe ser hoy o en el futuro.';
        isValid = false;
      }
    }

    if (!product.date_revision) {
      newErrors.date_revision = 'La fecha de revisión es requerida.';
      isValid = false;
    } else {
      const revisionDate = new Date(product.date_revision);
      const releaseDate = new Date(product.date_release);
      const nextYear = new Date(releaseDate);
      nextYear.setFullYear(nextYear.getFullYear() + 1);
      if (
        revisionDate.toISOString().split('T')[0] !==
        nextYear.toISOString().split('T')[0]
      ) {
        newErrors.date_revision =
          'La fecha de revisión debe ser exactamente un año después de la fecha de liberación.';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (name: keyof Product, value: string) => {
    setProduct(prevProduct => ({...prevProduct, [name]: value}));
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
    const isValid = await validateForm();
    if (isValid && isEdit) {
      updateProduct(product);
    }
    if (isValid && !isEdit) {
      createProduct(product);
    }
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
