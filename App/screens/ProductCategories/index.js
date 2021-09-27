import React, {useState, useEffect} from 'react';
import {View, FlatList, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

//others
import Header from '../../components/Header';
import styles from './styles';
import LoadingOverlay from '../../components/LoadingOverlay';
import NoItem from '../../components/NoItem';
import getCategories from '../../redux/actions/getProductCategoriesAction';
import Category from '../../components/Category';

const ProductCategories = ({navigation}) => {
  const [search, setSearch] = useState(''),
    [doSearch, setDoSearch] = useState(false);

  const dataResult = useSelector(state => state.productCategoryReducer);
  const dispatch = useDispatch();

  const renderItem = ({item}) => (
    <Category
      title={item}
      description="Item description: The goal is create a simple app for users to browse the products and add products to cart."
      categoryId={item}
      navigation={navigation}
    />
  );

  const goBack = () => {
    navigation.goBack();
  };

  const searchAction = () => {
    setDoSearch(!doSearch);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title="Categories"
        action={goBack}
        // icon="chevron-left"
        searchInput={true}
        searchAction={searchAction}
        doSearch={doSearch}
      />
      {doSearch ? (
        <TextInput
          style={styles.searchInput}
          value={search}
          placeholder="Search"
          onChangeText={search => setSearch(search)}
        />
      ) : null}

      <View style={styles.body}>
        {dataResult.categoryList && dataResult.categoryList.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            collapsable={true}
            data={dataResult.categoryList}
            renderItem={renderItem}
            keyExtractor={item => item}
          />
        ) : (
          <NoItem title="No categories yet!" />
        )}
      </View>

      {dataResult.loading ? <LoadingOverlay /> : null}
    </View>
  );
};

export default ProductCategories;
