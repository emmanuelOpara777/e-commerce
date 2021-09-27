import {StyleSheet} from 'react-native';

import {font, textColor} from '../../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    flex: 1,
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
