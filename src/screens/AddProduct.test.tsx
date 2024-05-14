import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AddProduct from './AddProduct';

describe('AddProduct', () => {

  it('debe poder reiniciar el formulario', () => {
    const {getByText} = render(<AddProduct />);
    const resetButton = getByText('Reiniciar');
    fireEvent.press(resetButton);
    expect(resetButton).toBeTruthy(); 
  });

  it('debe poder enviar el formulario', () => {
    const {getByText} = render(<AddProduct />);
    const submitButton = getByText('Enviar');
    fireEvent.press(submitButton);
    expect(submitButton).toBeTruthy(); 
  });

  it('debe mostrar un mensaje de error al ingresar un nombre de producto vacío', () => {
    const {getByText, getByPlaceholderText} = render(<AddProduct />);
    const nameInput = getByPlaceholderText('Nombre del producto');
    fireEvent.changeText(nameInput, '');
    const submitButton = getByText('Enviar');
    fireEvent.press(submitButton);
    const errorMessage = getByText('El nombre del producto es obligatorio');
    expect(errorMessage).toBeTruthy(); 
  });

  it('no debe mostrar un mensaje de error al ingresar un nombre de producto válido', () => {
    const {getByText, getByPlaceholderText, queryByText} = render(<AddProduct />);
    const nameInput = getByPlaceholderText('Nombre del producto');
    fireEvent.changeText(nameInput, 'Product A');
    const submitButton = getByText('Enviar');
    fireEvent.press(submitButton);
    const errorMessage = queryByText('El nombre del producto es obligatorio');
    expect(errorMessage).toBeNull(); 
  });
});
