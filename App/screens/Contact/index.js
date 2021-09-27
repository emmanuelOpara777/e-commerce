import React, {useState} from 'react';
import {View, Text} from 'react-native';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Header from '../../components/Header';
import styles from './styles';

const Contact = ({navigation}) => {
  const [subject, setSubject] = useState(''),
    [message, setMessage] = useState('');

  const goBack = () => {
    navigation.goBack();
  };

  const handleSendMessage = () => {
    console.log('handleSendMessage');
  };

  return (
    <View style={styles.container}>
      <Header action={goBack} icon="chevron-left" title="Contact" />
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.label}>Subject</Text>
          <TextInput
            value={subject}
            onChangeText={subject => {
              setSubject(subject);
            }}
            placeholder="Subject"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            multiline
            numberOfLines={7}
            value={message}
            numberOfLines={5}
            onChangeText={message => {
              setMessage(message);
            }}
          />
        </View>

        <View style={styles.button}>
          <Button title="Send Message" action={handleSendMessage} />
        </View>
      </View>
    </View>
  );
};

export default Contact;
