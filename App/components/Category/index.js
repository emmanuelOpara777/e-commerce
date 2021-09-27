import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';

const Category = ({title, description, categoryId, navigation}) => (
  <View style={styles.card}>
    <TouchableOpacity
      onPress={() => navigation.navigate('Products', {categoryId})}>
      <View style={styles.row}>
        <Image style={styles.image} source={require('../../images/logo.png')} />
        <View style={styles.itemLabel}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>

          <Text numberOfLines={3} style={styles.description}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

export default Category;
