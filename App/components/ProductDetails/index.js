import React, {useRef} from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

//others
import styles from './styles';

const ProductDetails = ({
  productItem,
  itemImage,
  setModalVisible,
  modalVisible,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.modalWrapper}>
        <View style={[styles.row, styles.rowSpaceBetween]}>
          <Text
            style={styles.productName}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {productItem.itemName}
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <EntypoIcon name="circle-with-cross" color="red" size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.sliderWrapper}>
          <Image style={styles.slideImage} source={{uri: itemImage}} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper}>
            <Text style={styles.productDescription}>
              {productItem.description}
            </Text>
            <View style={{height: 350}} />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};
export default ProductDetails;
