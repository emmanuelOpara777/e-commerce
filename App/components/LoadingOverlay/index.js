import React from 'react';
import {ActivityIndicator, View} from 'react-native';

//css
import styles from './styles';
//primary colour
import {primary} from '../../global';

const LoadingOverlay = () => {
  return (
    <View style={styles.overLay}>
      <ActivityIndicator color={primary} size="small" />
    </View>
  );
};

export default LoadingOverlay;
