import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigationTypes';

export interface AddProductProps {
  navigation: StackNavigationProp<RootStackParamList, 'AddProduct'>;
  route: RouteProp<RootStackParamList, 'AddProduct'>;
}
