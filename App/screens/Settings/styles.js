import {StyleSheet} from 'react-native';

import {font, primary} from '../../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingRight: 10,
    paddingTop: 10,
    paddingLeft: 10,
  },
  row: {
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
  },
  innerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    padding: 10,
  },
  subRow: {
    flexDirection: 'row',
  },
  label: {
    textAlignVertical: 'center',
    fontFamily: font,
    fontSize: 18,
    color: primary,
    paddingLeft: 10,
  },
  height: {height: 50},
});

export default styles;
