import React, {useState, useRef, useEffect} from 'react';
import {View, FlatList, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

//others
import LoadingOverlay from '../../components/LoadingOverlay';
import styles from './styles';
import NoItem from '../../components/NoItem';
import Product from '../../components/Product';
import HeaderCartIcon from '../../components/HeaderCartIcon';
import ProductDetails from '../../components/ProductDetails';
import {showMessage} from '../../global';

//redux
import getCart from '../../redux/actions/getCartAction';
import {getProducts} from '../../redux/actions/getProductsAction';

const Products = ({navigation, route}) => {
  const dataResult = useSelector(state => state.productsReducer);
  const [search, setSearch] = useState(''),
    [modalVisible, setModalVisible] = useState(false),
    [productItem, setProductItem] = useState({itemName: '', description: ''}),
    [itemImage, setItemImage] = useState([]),
    [doSearch, setDoSearch] = useState(false);

  const dispatch = useDispatch();

  const renderItem = ({item}) => (
    <Product
      id={item.id}
      title={item.title}
      price={item.price}
      productId={item.id}
      inCart={item.inCart}
      favourite={item.favourite}
      image={item.image}
      description={item.description}
      navigation={navigation}
      setItemImage={setItemImage}
      setModalVisible={setModalVisible}
      setProductItem={setProductItem}
      cart={false}
    />
  );

  useEffect(() => {
    dispatch(getProducts(route.params.categoryId));
    dispatch(getCart());
  }, []);

  useEffect(() => {
    if (dataResult.message === 'Product already in the cart!') {
      showMessage('danger', 'Cart', 'Product already in the cart!');
      return;
    }
    if (dataResult.message === 'Product added to cart') {
      showMessage('success', 'Cart', 'Product added to cart!');
      return;
    }
  }, [dataResult]);

  return (
    <View style={styles.container}>
      <HeaderCartIcon
        navigation={navigation}
        title="Products"
        setDoSearch={setDoSearch}
        doSearch={doSearch}
      />

      <View style={styles.body}>
        {doSearch ? (
          <TextInput
            style={styles.searchInput}
            value={search}
            placeholder="Search"
            onChangeText={search => setSearch(search)}
          />
        ) : null}

        {dataResult.productList && dataResult.productList.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            collapsable={true}
            data={dataResult.productList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        ) : (
          <NoItem title="No products yet!" />
        )}
      </View>
      <ProductDetails
        productItem={productItem}
        itemImage={itemImage}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />

      {/* <LoadMoreButton title="Load more.." /> */}
      {dataResult.loading ? <LoadingOverlay /> : null}
    </View>
  );
};

export default Products;
