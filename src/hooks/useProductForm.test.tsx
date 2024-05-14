import {renderHook, act} from '@testing-library/react-hooks';
import useProductForm from './useProductForm';

describe('useProductForm', () => {
  test('debe manejar cambios en los campos', () => {
    const initialProduct = {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: '',
    };
    const {result} = renderHook(() =>
      useProductForm({initialProduct, isEdit: false}),
    );

    act(() => {
      result.current.setProduct({
        id: '123455',
        name: 'Producto Nuevo',
        description:
          'Tarjeta de crédito con límite alto y beneficios exclusivos.',
        logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
        date_release: '2023-01-01',
        date_revision: '2024-01-01',
      });
    });

    expect(result.current.product.name).toBe('Producto Nuevo');
  });
});
