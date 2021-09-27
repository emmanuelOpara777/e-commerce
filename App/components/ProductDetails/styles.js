import {StyleSheet} from 'react-native';

import {font, primary} from '../../global';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  rowSpaceBetween: {justifyContent: 'space-between'},
  modalWrapper: {
    padding: 10,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  productName: {
    fontFamily: font,
    color: primary,
    fontSize: 16,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 16,
    fontFamily: font,
    textAlign: 'justify',
    paddingTop: 10,
  },
  slide: {
    padding: 10,
    paddingBottom: 0,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  imageLabel: {
    fontFamily: font,
    fontSize: 15,
    fontWeight: 'bold',
    padding: 3,
    color: 'white',
  },
  description: {
    fontFamily: font,
    fontSize: 16,
  },
  slideImage: {
    height: 350,
    width: 350,
    borderRadius: 5,
    borderColor: primary,
    borderWidth: 1,
  },
  sliderWrapper: {
    alignItems: 'center',
  },
});

export default styles;
