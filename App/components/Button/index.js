import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {primary} from '../../global';
import styles from './styles';

const Button = ({title, action, faint}) => {
  return (
    <TouchableOpacity onPress={() => action()}>
      <View
        style={[
          styles.wrapper,
          {
            backgroundColor: faint ? 'white' : primary,
            borderColor: faint ? primary : 'white',
            borderWidth: faint ? 1 : 0,
          },
        ]}>
        <Text style={[styles.btn, {color: faint ? primary : 'white'}]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
