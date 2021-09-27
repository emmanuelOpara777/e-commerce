import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const LoadingButton = ({title}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.btn}>{title}</Text>
    </View>
  );
};

export default LoadingButton;
