import {StyleSheet} from 'react-native';

import {font, primary, borderColor} from '../../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    paddingRight: 5,
    paddingLeft: 5,
  },
  body: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 50,
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
    backgroundColor: '#8a9bb4',
    borderRadius: 5,
    padding: 2,
    paddingRight: 7,
    paddingLeft: 7,
  },
  image: {height: 80, width: 80},
  itemLabel: {paddingTop: 20, paddingLeft: 5, flexShrink: 1},
  title: {fontFamily: font, fontSize: 18},
  price: {fontFamily: font, fontSize: 15, color: primary},
  counterIcon: {
    position: 'absolute',
    top: 3,
    right: 3,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor,
    borderRadius: 5,
  },
  btnIcon: {
    position: 'absolute',
    bottom: 3,
    right: 3,
  },
  favouriteIcon: {position: 'absolute', bottom: 1, right: '50%'},
  underline: {
    backgroundColor: 'white',
    color: primary,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  quantity: {
    textAlignVertical: 'center',
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
  },
  checkOut: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: primary,
    alignSelf: 'flex-end',
    height: 60,
    width: 60,
    justifyContent: 'center',
    borderRadius: 50,
    alignItems: 'center',
    elevation: 3,
  },

  checkoutText: {
    textAlignVertical: 'center',
    fontSize: 14,
    color: 'white',
    fontFamily: font,
    textAlign: 'center',
  },
  center: {
    alignItems: 'center',
  },
});

export default styles;
