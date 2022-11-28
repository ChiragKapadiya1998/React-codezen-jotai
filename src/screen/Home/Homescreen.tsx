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
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CallStackParamsList} from '../../navigators/types';
import {Pages} from '../../navigators/Routes';

const Homescreen = () => {
  const {mutateAsync: sendOtpMutate, isLoading, error} = useMutationMutation();
  const {navigate} = useNavigation<StackNavigationProp<CallStackParamsList>>();
  const [token, setToken] = useAtom(tokenAtom);

  const Logout = () => {
    setToken(null);
    navigate(Pages.SignUpScreen);
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator
          size="large"
          color="#00ff00"
          style={{alignSelf: 'center'}}
        />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => {}}>
        <Text>Home screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Logout();
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Homescreen;
