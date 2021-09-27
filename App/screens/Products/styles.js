import {StyleSheet} from 'react-native';
import {primary, font, borderColor} from '../../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  rowSpaceBetween: {justifyContent: 'space-between'},

  body: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 50,
  },
  searchInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor,
    marginRight: 10,
    marginLeft: 10,
    padding: 5,
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  modalWrapper: {
    padding: 10,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  productName: {
    fontFamily: font,
    color: primary,
    fontSize: 18,
    paddingBottom: 5,
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
    padding: 3,
    color: 'white',
  },
  description: {
    fontFamily: font,
    fontSize: 16,
  },
  slideImage: {
    height: 250,
    width: 250,
    borderRadius: 5,
  },
  sliderWrapper: {
    alignItems: 'center',
  },
});

export default styles;
