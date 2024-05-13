import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  ProductList: undefined;
  ProductDetails: {productId: string};
  AddProduct: undefined;
  EditProduct: {productId: string};
};

export type HomeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type ProductListNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductList'
>;
export type ProductDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

export type ProductDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetails'
>;
export type ProductDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;
export type EditProductNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EditProduct'
>;

export type EditProductScreenRouteProp = RouteProp<
  RootStackParamList,
  'EditProduct'
>;

export type EditProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EditProduct'
>;

export type AddProductNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddProduct'
>;
export type AddProductScreenRouteProp = RouteProp<
  RootStackParamList,
  'AddProduct'
>;
export type AddProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddProduct'
>;
