import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';
import Header from '../../components/Header';
import Product from '../../components/Product';
import ProductDetails from '../../components/ProductDetails';

const Cart = ({navigation}) => {
  const dataResult = useSelector(state => state.productsReducer);
  const [productItem, setProductItem] = useState({
      itemName: '',
      description: '',
    }),
    [modalVisible, setModalVisible] = useState(false),
    [itemImage, setItemImage] = useState([]);
  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (dataResult.cartList && dataResult.cartList.length === 0) {
      navigation.navigate('Products');
    }
  }, [dataResult.cartList]);

  const renderItem = ({item}) => (
    <Product
      description={item.description}
      image={item.image}
      title={item.title}
      price={item.price}
      productId={item.id}
      quantity={item.quantity}
      cart={true}
      setItemImage={setItemImage}
      setModalVisible={setModalVisible}
      setProductItem={setProductItem}
    />
  );

  return (
    <View style={styles.container}>
      <Header title="Shopping Cart" action={goBack} icon="chevron-left" />
      <View style={styles.body}>
        <FlatList
          showsVerticalScrollIndicator={false}
          collapsable={true}
          data={dataResult.cartList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <ProductDetails
        productItem={productItem}
        itemImage={itemImage}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
    </View>
  );
};

export default Cart;
