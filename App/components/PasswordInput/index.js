import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './styles';

const PasswordInput = props => {
  return (
    <View>
      <TextInput
        {...props}
        style={styles.textInput}
        placeholderTextColor="lightgray"
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default PasswordInput;
