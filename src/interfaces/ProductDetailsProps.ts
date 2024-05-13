import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';

export interface ProductDetailsProps {
  navigation: StackNavigationProp<RootStackParamList, 'EditProduct'>;
  route: RouteProp<RootStackParamList, 'EditProduct'>;
}
