import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

//redux
// import cart from '../../redux/actions/cartAction';
import handleCart from '../../redux/actions/cartAction';

//others
import styles from './styles';

const Product = ({
  title,
  price,
  productId,
  image,
  description,
  setModalVisible,
  setItemImage,
  setProductItem,
  navigation,
  cart,
}) => {
  const dataResult = useSelector(state => state.productsReducer);

  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
          setItemImage(image);
          setProductItem({itemName: title, description});
        }}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{uri: image ? image : '../../images/logo.png'}}
          />
          <View style={styles.itemLabel}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {title}
            </Text>

            <Text style={styles.price}>${price}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {cart ? (
        <TouchableOpacity
          style={styles.btnIcon}
          onPress={() => {
            dispatch(handleCart(productId, dataResult, 'remove'));
          }}>
          <Text style={styles.iconText}>Remove</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.btnIcon}
          onPress={() => {
            dispatch(handleCart(productId, dataResult, 'add'));
          }}>
          <Text style={styles.iconText}>Add</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.reportIcon}
        onPress={() => {
          navigation.navigate('ReportProduct', {productId});
        }}>
        <Text style={[styles.iconText, styles.underline]}>
          Report this item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Product;
