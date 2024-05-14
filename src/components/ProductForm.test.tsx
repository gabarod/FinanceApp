import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductForm from './ProductForm';

describe('ProductForm', () => {
  test('debe mostrar los campos necesarios', () => {
    const { getByPlaceholderText } = render(<ProductForm product={undefined} errors={undefined} handleChange={undefined} handleSubmit={undefined} handleReset={undefined} />);

    expect(getByPlaceholderText('Nombre')).toBeTruthy();
    expect(getByPlaceholderText('Descripción')).toBeTruthy();
  });

  test('debe permitir la introducción de texto en los campos', () => {
    const { getByPlaceholderText } = render(<ProductForm product={undefined} errors={undefined} handleChange={undefined} handleSubmit={undefined} handleReset={undefined} />);
    const nombreInput = getByPlaceholderText('Nombre');
    const descripcionInput = getByPlaceholderText('Descripción');

    fireEvent.changeText(nombreInput, 'Producto Nuevo');
    fireEvent.changeText(descripcionInput, 'Descripción del producto nuevo');

    expect(nombreInput.props.value).toBe('Producto Nuevo');
    expect(descripcionInput.props.value).toBe('Descripción del producto nuevo');
  });
});
