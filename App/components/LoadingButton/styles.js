import {StyleSheet} from 'react-native';
import {borderColor, font, primary} from '../../global';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: borderColor,
    padding: 15,
    borderRadius: 7,
  },
  btn: {
    color: 'white',
    textAlign: 'center',
    fontFamily: font,
  },
});

export default styles;
