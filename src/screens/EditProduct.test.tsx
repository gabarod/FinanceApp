import React from 'react';
import {render} from '@testing-library/react-native';
import EditProduct from './EditProduct';
describe('EditProduct', () => {
  test('debe cargar el producto para editar', () => {
    const {getByText} = render(
      <EditProduct
        route={{
          params: {
            product: {
              id: '1',
              name: 'Producto 1',
              description: 'Descripción del producto 1',
              logo: 'https://placekitten.com/200/200',
              date_release: '2021-01-01',
              date_revision: '2021-01-01',
            },
          },
        }}
        navigation={{
          navigate: jest.fn(),
        }}
      />,
    );
  });
});
