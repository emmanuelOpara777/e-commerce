import {StyleSheet} from 'react-native';

import {primary, font} from '../../global';

const styles = StyleSheet.create({
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
  row: {
    flexDirection: 'row',
  },
  image: {height: 80, width: 80},
  itemLabel: {paddingLeft: 5, flexShrink: 1},
  title: {
    fontFamily: font,
    fontSize: 18,
    color: primary,
    paddingTop: 4,
    textTransform: 'uppercase',
  },
  description: {fontFamily: font, fontSize: 14, paddingTop: 3, color: 'grey'},
});

export default styles;
