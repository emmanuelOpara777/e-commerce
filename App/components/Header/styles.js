import {StyleSheet} from 'react-native';
import {primary, font} from '../../global';

const styles = StyleSheet.create({
  header: {
    backgroundColor: primary,
    justifyContent: 'center',
    elevation: 5,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  headerLabel: {
    fontSize: 18,
    fontFamily: font,
    color: 'white',
  },
  icon: {
    paddingRight: 5,
    paddingLeft: 5,
  },
});

export default styles;
