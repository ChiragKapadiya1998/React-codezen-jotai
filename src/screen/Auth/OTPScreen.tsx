import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useAtom, useSetAtom} from 'jotai';
import {useVerifyOtpMutationMutation} from '../../generated';
import {otpAtom, otpAtoms, sessionAtom, tokenAtom} from '../../store';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CallStackParamsList, ParamList} from '../../navigators/types';
import {Pages} from '../../navigators/Routes';

const OTPScreen: React.FunctionComponent = () => {
  const {navigate} = useNavigation<StackNavigationProp<CallStackParamsList>>();
  const route = useRoute();
  const {mobile}: any = route?.params;
  const [textOtp, setTextOtp] = useState('');

  const {
    mutateAsync: verifyOtpMutate,
    isLoading,
    error,
  } = useVerifyOtpMutationMutation();

  const setToken = useSetAtom(tokenAtom);
  const otps = useAtom(otpAtoms);

  async function getData() {
    verifyOtpMutate({
      verifyOtpInput: {
        prefix: '+91',
        mobileNo: mobile,
        countryCode: 'IN',
        otp: textOtp,
      },
    })
      .then(res => {
        console.log('resresres', res?.verifyOtp);
        setToken({
          token: res?.verifyOtp?.accessToken,
        });
        navigate(Pages.Homescreen);
        setTextOtp('');
      })
      .catch(err => {
        console.log('err', err);
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
      <Text>Verify OTP Screen</Text>

      <Text
        style={{textAlign: 'center', marginVertical: 20}}>{`${otps[0]}`}</Text>

      <TextInput
        value={textOtp}
        onChangeText={text => {
          setTextOtp(text);
        }}
        placeholder={'enter the otp'}
        style={{
          borderWidth: 1,
          marginHorizontal: 50,
          paddingVertical: 10,
          paddingLeft: 20,
          fontSize: 20,
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
        <Text>{'Done'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OTPScreen;
