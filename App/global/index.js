import {Alert} from 'react-native';
import {showMessage} from 'react-native-flash-message';

module.exports = {
  baseURL: 'https://fakestoreapi.com',
  primary: '#1F3D94',
  backgroundColor: 'white',
  font: 'Forum-Regular',
  borderColor: '#e3e3e8',
  cardBGC: '#ECE4E4',
  textColor: '#1F3D94',
  imageWidth: 100,
  imageHeight: 100,
  logo: require('../images/logo.png'),
  showAlert: message => {
    return Alert.alert('', message);
  },
  showMessage: (type, title, message) => {
    showMessage({
      message: title,
      description: message,
      type,
      // icon: 'auto',
      textStyle: {fontFamily: 'Forum-Regular'},
      titleStyle: {fontWeight: 'bold'},
    });
  },
};
