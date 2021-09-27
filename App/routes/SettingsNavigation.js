import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Settings from '../screens/Settings';
import ChangePassword from '../screens/ChangePassword';
import ChangePhoneNumber from '../screens/ChangePhoneNumber';

const SettingsStack = createStackNavigator();

const SettingsNavigation = () => {
  return (
    <SettingsStack.Navigator initialRouteName="Settings">
      <SettingsStack.Screen
        options={{
          headerShown: false,
        }}
        name="Settings"
        component={Settings}
      />
      <SettingsStack.Screen
        options={{
          headerShown: false,
        }}
        name="ChangePassword"
        component={ChangePassword}
      />
      <SettingsStack.Screen
        options={{
          headerShown: false,
        }}
        name="ChangePhoneNumber"
        component={ChangePhoneNumber}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigation;
