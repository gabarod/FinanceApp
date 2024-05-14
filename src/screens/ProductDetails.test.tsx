import React from 'react';
import {render} from '@testing-library/react-native';
import ProductDetails from './ProductDetails';

describe('ProductDetails', () => {
  const mockProduct = {
    id: '1',
    nombre: 'Producto 1',
    descripcion: 'Descripción detallada del Producto 1',
    logo: 'url-del-logo',
    fechaLiberacion: '2022-01-01',
    fechaRevision: '2022-01-02',
  };

  test('debe mostrar la información del producto', () => {
    const {getByText} = render(
      <ProductDetails route={{params: {productId: '1'}}} />,
    );
    expect(getByText(mockProduct.nombre)).toBeTruthy();
    expect(getByText(mockProduct.descripcion)).toBeTruthy();
    expect(
      getByText('Fecha de Liberación: ' + mockProduct.fechaLiberacion),
    ).toBeTruthy();
    expect(
      getByText('Fecha de Revisión: ' + mockProduct.fechaRevision),
    ).toBeTruthy();
  });
});
