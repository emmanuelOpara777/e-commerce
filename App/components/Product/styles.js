import {StyleSheet} from 'react-native';

import {font, primary} from '../../global';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    elevation: 3,
    marginBottom: 10,
  },
  iconText: {
    fontFamily: font,
    fontSize: 18,
    color: 'white',
    backgroundColor: primary,
    borderRadius: 5,
    padding: 2,
    paddingRight: 7,
    paddingLeft: 7,
  },
  image: {
    height: 80,
    width: 80,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
  },
  itemLabel: {paddingTop: 20, paddingLeft: 5, flexShrink: 1},
  title: {fontFamily: font, fontSize: 18},
  price: {fontFamily: font, fontSize: 15, color: primary},
  btnIcon: {position: 'absolute', top: 3, right: 3},
  reportIcon: {position: 'absolute', bottom: 3, right: 3},
  favouriteIcon: {position: 'absolute', bottom: 3, right: 150},
  underline: {
    backgroundColor: 'white',
    color: primary,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

export default styles;
