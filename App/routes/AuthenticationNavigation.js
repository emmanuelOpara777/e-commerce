import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import ResetPassword from '../screens/ResetPassword';

import HomeNavigation from '../routes/HomeNavigation';

const AuthenticationStack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthenticationStack.Navigator initialRouteName="SignIn">
      <AuthenticationStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignUp"
        component={SignUp}
      />
      <AuthenticationStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignIn"
        component={SignIn}
      />
      <AuthenticationStack.Screen
        options={{
          headerShown: false,
        }}
        name="ResetPassword"
        component={ResetPassword}
      />
      <AuthenticationStack.Screen
        options={{
          headerShown: false,
        }}
        name="HomeNavigation"
        component={HomeNavigation}
      />
    </AuthenticationStack.Navigator>
  );
};

export default AuthNavigation;
