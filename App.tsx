import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddProduct from './src/screens/AddProduct';
import EditProduct from './src/screens/EditProduct';
import ProductDetails from './src/screens/ProductDetails';
import ProductList from './src/screens/ProductList';

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetails: {productId: number};
  AddProduct: undefined;
  EditProduct: {productId: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{title: 'Lista de Productos'}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{title: 'Detalle de Producto'}}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{title: 'Agregar Producto'}}
        />
        <Stack.Screen
          name="EditProduct"
          component={EditProduct}
          options={{title: 'Editar Producto'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
