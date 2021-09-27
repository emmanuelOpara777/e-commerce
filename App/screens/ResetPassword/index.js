import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import Layout from '../../components/Layout';
import InputText from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import LoadingButton from '../../components/LoadingButton';
import {logo, primary} from '../../global';

const ResetPassword = ({navigation}) => {
  const [email, setEmail] = useState(''),
    [isLoading, setIsLoading] = useState(false);

  return (
    <Layout>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.header}>Reset Password</Text>

        <View style={styles.InputRow}>
          <Text style={styles.InputLabel}>Email</Text>
          <InputText
            value={email}
            onChangeText={email => {
              setEmail(email);
            }}
            style={[styles.textInput]}
            placeholder="Enter email"
            keyboardType="email-address"
            placeholder="example@domain.com"
          />
        </View>

        <View>
          {isLoading ? (
            <LoadingButton title="Please wait" />
          ) : (
            <Button
              title={isLoading ? 'Please wait' : 'Reset'}
              action={() => console.log('eeee')}
            />
          )}
        </View>
        <View style={styles.footer}>
          <Text style={styles.labelText}>Have an account?</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('SignIn')}>
            <View style={styles.row}>
              <Text style={styles.signinLabel}>Sign in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default ResetPassword;
