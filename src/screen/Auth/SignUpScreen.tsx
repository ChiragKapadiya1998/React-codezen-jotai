import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {useAtom} from 'jotai';
import {useMutationMutation} from '../../generated';
import {otpAtoms} from '../../store';
import {useNavigation} from '@react-navigation/native';
import {Pages} from '../../navigators/Routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {CallStackParamsList} from '../../navigators/types';

const SignUpScreen = () => {
  const {mutateAsync: sendOtpMutate, isLoading, error} = useMutationMutation();
  const {navigate} = useNavigation<StackNavigationProp<CallStackParamsList>>();

  const [otps, setOtps] = useAtom(otpAtoms);
  const [number, setNumber] = useState('');

  async function getData() {
    sendOtpMutate({
      loginUserInput: {
        prefix: '+91',
        mobileNo: number,
        deviceVersion: '1.0',
        deviceType: 'Iphone',
        deviceToken: 'xvxvxcvxcvxcv',
        deviceOS: 'ios',
        countryCode: 'IN',
      },
    })
      .then(res => {
        setOtps(res?.login?.otp.toString());
        navigate(Pages.OTPScreen, {mobile: number});
        setNumber('');
      })
      .catch(err => {
        console.log(err);
      });
  }

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
      <TouchableOpacity
        onPress={() => {
          getData();
        }}>
        <Text>SignUpScreen</Text>
      </TouchableOpacity>

      <TextInput
        value={number}
        onChangeText={text => {
          setNumber(text);
        }}
        placeholder={'enter the mobile'}
        maxLength={10}
        style={{
          borderWidth: 1,
          marginHorizontal: 50,
          paddingVertical: 10,
          paddingLeft: 20,
          fontSize: 20,
          marginTop: 10,
        }}
      />
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          borderWidth: 1,
          paddingHorizontal: 20,
          marginTop: 20,
          paddingVertical: 10,
        }}
        onPress={getData}>
        <Text>{'Otp'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpScreen;
