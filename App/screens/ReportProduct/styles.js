import {StyleSheet} from 'react-native';

import {borderColor, font, primary} from '../../global';

const styles = StyleSheet.create({
  container: {flex: 1},
  body: {padding: 10, paddingTop: 20},
  label: {fontFamily: font, paddingBottom: 5, fontSize: 15},
  textArea: {
    borderWidth: 1,
    borderColor,
    borderRadius: 5,
    textAlignVertical: 'top',
    padding: 10,
  },
  wrapper: {
    paddingBottom: 20,
  },
  removeIcon: {position: 'absolute', right: '21%', zIndex: 40},
  submitBTN: {
    alignSelf: 'center',
    backgroundColor: primary,
    paddingRight: 30,
    paddingLeft: 30,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitText: {
    color: 'white',
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    borderRadius: 5,
  },
});

export default styles;
