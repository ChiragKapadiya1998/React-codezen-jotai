import {Platform} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Mixpanel} from 'mixpanel-react-native';
import Config from 'react-native-config';

export const wp = (val: number) => widthPercentageToDP(val);

export const hp = (val: number) => heightPercentageToDP(val);

export const statusBarHeight = getStatusBarHeight();

export const isIos = Platform.OS === 'ios';

export const {isPad} = Platform;

export const mixpanel = new Mixpanel(Config.MixpanelToken);
