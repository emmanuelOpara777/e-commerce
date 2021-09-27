import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SettingsNavigation from '../routes/SettingsNavigation';

import Products from '../screens/Products';
import ReportProduct from '../screens/ReportProduct';
import ProductCategories from '../screens/ProductCategories';
import Cart from '../screens/Cart';
import Contact from '../screens/Contact';
import About from '../screens/About';

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator initialRouteName="ProductCategories">
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="Products"
        component={Products}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="ReportProduct"
        component={ReportProduct}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="ProductCategories"
        component={ProductCategories}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="Cart"
        component={Cart}
      />

      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="SettingsNavigation"
        component={SettingsNavigation}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="Contact"
        component={Contact}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="About"
        component={About}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
