import {StyleSheet} from 'react-native';
import {
  primary,
  font,
  borderColor,
  textColor,
  imageHeight,
  imageWidth,
} from '../../global';

const styles = StyleSheet.create({
  scrollFlex: {paddingBottom: 40, paddingTop: 30},
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo: {
    width: imageWidth,
    height: imageHeight,
    marginBottom: '5%',
    alignSelf: 'center',
  },
  header: {
    fontFamily: font,
    color: textColor,
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: '5%',
  },
  formLabel: {
    textAlign: 'center',
    marginBottom: '20%',
    fontSize: 18,
    color: primary,
    fontFamily: font,
  },
  InputLabel: {
    marginBottom: 5,
    fontFamily: font,
    color: textColor,
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    borderWidth: 1,
    borderColor,
    borderRadius: 5,
    padding: 1,
  },
  eye: {paddingRight: 10, paddingTop: 10},
  InputRow: {
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
  },
  signupLabel: {
    textDecorationLine: 'underline',
    color: primary,
    marginLeft: 5,
    fontFamily: font,
    // fontSize: 18,
  },
  labelText: {
    textAlignVertical: 'center',
    fontFamily: font,
    // fontSize: 18,
  },
  footer: {
    marginTop: 20,
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  email: {
    alignSelf: 'flex-end',
    marginTop: 15,
    marginBottom: 15,
  },
});

export default styles;
