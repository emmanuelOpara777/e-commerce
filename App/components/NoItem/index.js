import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const NoItem = ({title}) => {
  return (
    <View>
      <Text style={styles.center}>{title}</Text>
    </View>
  );
};

export default NoItem;
