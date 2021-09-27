import {StyleSheet} from 'react-native';
import {primary, font, borderColor} from '../../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
  },
  searchInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
  },
  icon: {
    paddingRight: 5,
    paddingLeft: 5,
  },
  row: {
    flexDirection: 'row',
  },
  cart: {
    color: 'white',
    fontFamily: font,
    fontSize: 18,
    textAlignVertical: 'center',
  },
  body: {marginRight: 10, marginLeft: 10, marginTop: 10, marginBottom: 50},

  // card: {
  //   backgroundColor: 'white',
  //   borderRadius: 5,
  //   padding: 5,
  //   elevation: 3,
  //   marginBottom: 10,
  // },
  // iconText: {
  //   fontFamily: font,
  //   fontSize: 18,
  //   color: 'white',
  //   backgroundColor: primary,
  //   borderRadius: 5,
  //   padding: 2,
  //   paddingRight: 7,
  //   paddingLeft: 7,
  // },
  // image: {height: 80, width: 80},
  // itemLabel: {paddingLeft: 5, flexShrink: 1},
  // title: {
  //   fontFamily: font,
  //   fontSize: 18,
  //   color: primary,
  //   paddingTop: 4,
  //   textTransform: 'uppercase',
  // },
  // description: {fontFamily: font, fontSize: 14, paddingTop: 3, color: 'grey'},
  btnIcon: {position: 'absolute', top: 3, right: 3},
  reportIcon: {position: 'absolute', bottom: 3, right: 3},
  underline: {
    backgroundColor: 'white',
    color: primary,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

export default styles;
