import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ProductList from './ProductList';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigationTypes';
import {RouteProp} from '@react-navigation/native';
describe('ProductList', () => {
  type NavigationMock = {
    navigate: StackNavigationProp<RootStackParamList>['navigate'];
    goBack: jest.Mock;
    reset: jest.Mock;
    dispatch: jest.Mock;
    isFocused: jest.Mock;
    canGoBack: jest.Mock;
    setParams: jest.Mock;
  };

  const navigationMock: NavigationMock = {
    navigate: jest.fn((...args: any[]) => undefined),
    goBack: jest.fn(),
    reset: jest.fn(),
    dispatch: jest.fn(),
    isFocused: jest.fn(),
    canGoBack: jest.fn(),
    setParams: jest.fn(),
  };

  it('Debe renderizar el loading cuando está en true', () => {
    const mockNavigate = jest.fn();
    const {getByTestId} = render(
      <ProductList
        route={
          {params: {loading: true}} as unknown as RouteProp<
            RootStackParamList,
            'ProductDetails'
          >
        }
        navigation={
          navigationMock as unknown as StackNavigationProp<
            RootStackParamList,
            'ProductDetails'
          >
        }
      />,
    );
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('Debe renderizar el número correcto de items en FlatList', () => {
    const mockNavigate = jest.fn();
    const {getAllByTestId} = render(
      <ProductList
        route={
          {params: {loading: true}} as unknown as RouteProp<
            RootStackParamList,
            'ProductDetails'
          >
        }
        navigation={
          navigationMock as unknown as StackNavigationProp<
            RootStackParamList,
            'ProductDetails'
          >
        }
      />,
    );
    const items = getAllByTestId('product-item');
    expect(items.length).toBe(3);
  });

  it('Debe filtrar la búsqueda', () => {
    const mockNavigate = jest.fn();
    const {getByPlaceholderText, getAllByTestId} = render(
      <ProductList
        route={
          {params: {loading: true}} as unknown as RouteProp<
            RootStackParamList,
            'ProductDetails'
          >
        }
        navigation={
          navigationMock as unknown as StackNavigationProp<
            RootStackParamList,
            'ProductDetails'
          >
        }
      />,
    );
    const searchInput = getByPlaceholderText('Buscar...');
    fireEvent.changeText(searchInput, 'Tarjeta');
    const items = getAllByTestId('product-item');
    expect(items.length).toBe(2);
  });
});
