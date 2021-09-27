import {StyleSheet} from 'react-native';

import {
  backgroundColor,
  imageWidth,
  imageHeight,
  font,
  textColor,
  primary,
} from '../../global';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor,
    paddingRight: 10,
    paddingLeft: 10,
  },
  header: {
    fontFamily: font,
    color: textColor,
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: '5%',
  },
  logo: {
    width: imageWidth,
    height: imageHeight,
    marginBottom: '5%',
    alignSelf: 'center',
  },
  InputLabel: {
    marginBottom: 5,
    fontFamily: font,
    color: textColor,
  },
  InputRow: {
    marginBottom: 15,
  },
  footer: {
    marginTop: 20,
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  signinLabel: {
    textDecorationLine: 'underline',
    color: primary,
    marginLeft: 5,
    fontFamily: font,
    fontSize: 16,
  },
  labelText: {
    textAlignVertical: 'center',
    fontSize: 16,
    fontFamily: font,
  },
});

export default styles;
