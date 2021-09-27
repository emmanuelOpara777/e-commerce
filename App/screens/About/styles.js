import {StyleSheet} from 'react-native';

import {font} from '../../global';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
  },
  aboutText: {
    fontFamily: font,
    fontSize: 16,
    textAlign: 'justify',
  },
  height: {
    height: 50,
  },
});

export default styles;
