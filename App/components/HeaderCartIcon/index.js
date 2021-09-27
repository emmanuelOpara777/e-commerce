import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';

//others
import styles from './styles';

const HeaderCartIcon = ({navigation, title, setDoSearch, doSearch}) => {
  const dataResult = useSelector(state => state.productsReducer);

  return (
    <View style={styles.header}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <EntypoIcon
            style={styles.icon}
            name="chevron-left"
            color="white"
            size={20}
          />
        </TouchableOpacity>

        <Text style={styles.headerLabel}>{title}</Text>

        <View style={styles.iconRow}>
          <TouchableOpacity
            onPress={() => {
              if (dataResult.cartList && dataResult.cartList.length > 0) {
                navigation.navigate('Cart');
              }
            }}>
            <View style={styles.row}>
              <EntypoIcon
                style={styles.icon}
                name="shopping-cart"
                color="white"
                size={20}
              />
              <Text style={styles.cart}>
                {dataResult.cartList ? dataResult.cartList.length : 0}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderCartIcon;
