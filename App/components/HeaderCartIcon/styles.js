import {StyleSheet} from 'react-native';

import {primary, font} from '../../global';

const styles = StyleSheet.create({
  header: {
    backgroundColor: primary,
    justifyContent: 'center',
    elevation: 5,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  headerLabel: {
    fontSize: 18,
    fontFamily: font,
    color: 'white',
  },
  iconRow: {
    flexDirection: 'row',
  },
  pipe: {
    fontFamily: font,
    textAlignVertical: 'center',
    paddingLeft: 10,
    paddingRight: 5,
    color: 'white',
    fontSize: 16,
  },
  icon: {
    paddingRight: 5,
    paddingLeft: 5,
  },
  row: {
    flexDirection: 'row',
  },
  rowSpaceBetween: {justifyContent: 'space-between'},
  cart: {
    color: 'white',
    fontFamily: font,
    fontSize: 18,
    textAlignVertical: 'center',
  },
});

export default styles;
