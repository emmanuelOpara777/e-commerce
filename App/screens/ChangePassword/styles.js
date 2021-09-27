import React from 'react';
import {StyleSheet} from 'react-native';

import {borderColor, font, textColor} from '../../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {paddingLeft: 10, paddingRight: 10, justifyContent: 'center', flex: 1},
  eye: {paddingRight: 10, paddingTop: 10},
  InputLabel: {
    marginBottom: 5,
    fontFamily: font,
    color: textColor,
  },
  width: {width: '95%'},
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor,
    borderRadius: 5,
    padding: 1,
    marginBottom: 20,
  },
});

export default styles;
