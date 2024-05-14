import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DeleteProductModal from './DeleteProductModal';

describe('DeleteProduct', () => {
  test('debe confirmar la eliminación', () => {
    const {getByText} = render(
      <DeleteProductModal
        productId={''}
        name={''}
        visible={false}
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    const button = getByText('Eliminar');
    fireEvent.press(button);
  });
});
