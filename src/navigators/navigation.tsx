import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './rootNavigation';

// screens
import Homescreen from '../screen/Home/Homescreen';
import OTPScreen from '../screen/Auth/OTPScreen';
import SignUpScreen from '../screen/Auth/SignUpScreen';
import Landing from '../screen/Landing/Landing';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{gestureEnabled: true}}
      />

      <Stack.Screen
        name="Homescreen"
        component={Homescreen}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
