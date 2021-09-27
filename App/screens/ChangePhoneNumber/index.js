import React, {useState} from 'react';
import {View, Text} from 'react-native';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Header from '../../components/Header';
import styles from './styles';

const ChangePhoneNumber = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const goBack = () => {
    navigation.goBack();
  };

  const handleChangePhone = () => {
    console.log('Emmanuel');
  };

  return (
    <View style={styles.container}>
      <Header action={goBack} icon="chevron-left" title="Change Phone Number" />
      <View style={styles.body}>
        <Text style={styles.label}>Phone number</Text>
        <TextInput
          value={phoneNumber}
          keyboardType="number-pad"
          onChangeText={phoneNumber => {
            setPhoneNumber(phoneNumber);
          }}
          placeholder="08012345678"
        />
        <View style={styles.button}>
          <Button title="Change" action={handleChangePhone} />
        </View>
      </View>
    </View>
  );
};

export default ChangePhoneNumber;
