import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthenticationNavigation from '../routes/AuthenticationNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AuthenticationNavigation />
    </NavigationContainer>
  );
};

export default App;
