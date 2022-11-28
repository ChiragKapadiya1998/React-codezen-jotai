import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Pages} from './Routes';

export type CallStackParamsList = {
  [Pages.SignUpScreen]: undefined;
  [Pages.Landing]: undefined;
  [Pages.OTPScreen]: {mobile: string};
  [Pages.Homescreen]: undefined;
};

export type ParamList = {
  mobile: string;
};
