import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import {useMutationMutation} from '../../generated';
import {otpAtom, otpAtoms, sessionAtom, tokenAtom} from '../../store';
import {navigate, navigationRef} from '../../navigators/rootNavigation';
import {useNavigation} from '@react-navigation/native';

const Landing = () => {
  const {navigate} = useNavigation();
  const [token] = useAtom(tokenAtom);

  useEffect(() => {
    if (token) {
      navigate('Homescreen');
    } else {
      navigate('SignUpScreen');
    }
  }, []);

  return (
    <SafeAreaView>
      <View />
    </SafeAreaView>
  );
};

export default Landing;
