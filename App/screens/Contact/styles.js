import {StyleSheet} from 'react-native';

import {font, textColor} from '../../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    justifyContent: 'center',
    flex: 1,
  },
  row: {
    paddingBottom: 20,
  },
  label: {
    fontFamily: font,
    paddingBottom: 5,
    color: textColor,
  },
  button: {
    paddingTop: 20,
  },
});
export default styles;
