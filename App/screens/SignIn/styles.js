import {StyleSheet} from 'react-native';

import {
  font,
  textColor,
  imageWidth,
  imageHeight,
  backgroundColor,
  borderColor,
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
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor,
    borderRadius: 5,
    padding: 1,
  },
  eye: {paddingRight: 10, paddingTop: 10},
  footer: {
    marginTop: 20,
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  signupLabel: {
    textDecorationLine: 'underline',
    color: primary,
    marginLeft: 5,
    fontFamily: font,
    // fontSize: 16,
  },
  labelText: {
    textAlignVertical: 'center',
    // fontSize: 16,
    fontFamily: font,
  },
  resetLink: {
    alignSelf: 'flex-end',
    marginTop: 15,
    // marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
  },
});

export default styles;
