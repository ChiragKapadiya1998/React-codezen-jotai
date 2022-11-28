import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import React, {useEffect} from 'react';

import {ActivityIndicator, Text, View} from 'react-native';
import {useMutationMutation} from './generated';
import {sessionAtom} from './store';

const Posts: React.FunctionComponent = () => {
  const {mutateAsync: sendOtpMutate, isLoading, error} = useMutationMutation();

  const setSession = useSetAtom(sessionAtom);
  const session = useAtomValue(sessionAtom);
  console.log('session', session);

  useEffect(() => {
    async function getData() {
      const data = await sendOtpMutate({
        loginUserInput: {
          prefix: '+91',
          mobileNo: '7698915449',
          deviceVersion: '1.0',
          deviceType: 'Iphone',
          deviceToken: 'xvxvxcvxcvxcv',
          deviceOS: 'ios',
          countryCode: 'IN',
        },
      })
        .then(res => {
          console.log('resresres', res);
          setSession({
            provider: 'otp',
            otp: res?.login?.otp,
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
    getData();
  }, []);

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
    <View>
      <Text>xcvxvxcv</Text>
    </View>
  );
};

export default Posts;
