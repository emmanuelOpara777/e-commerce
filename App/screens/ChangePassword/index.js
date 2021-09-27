import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import styles from './styles';
import Header from '../../components/Header';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import {primary} from '../../global';

const ChangePassword = ({navigation}) => {
  const [currentPassword, setCurrentPassword] = useState(''),
    [newPassword, setNewPassword] = useState(''),
    [confirmPassword, setConfirmPassword] = useState(''),
    [showPassword, setShowPassword] = useState(true),
    [showPassword2, setShowPassword2] = useState(true),
    [showPassword3, setShowPassword3] = useState(true);

  const goBack = () => {
    navigation.goBack();
  };

  const handleChangePassword = () => {
    console.log('Password changed');
  };

  return (
    <View style={styles.container}>
      <Header action={goBack} icon="chevron-left" title="Change Password" />
      <View style={styles.body}>
        <Text style={styles.InputLabel}>Current Password</Text>
        <View style={styles.inputWrapper}>
          <View style={styles.width}>
            <PasswordInput
              value={currentPassword}
              onChangeText={currentPassword => {
                setCurrentPassword(currentPassword);
              }}
              placeholder="Password"
              keyboardType="default"
              secureTextEntry={showPassword}
            />
          </View>
          {currentPassword.length > 0 ? (
            <TouchableOpacity
              style={styles.eye}
              onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EntypoIcon name="eye" color={primary} size={15} />
              ) : (
                <EntypoIcon name="eye-with-line" color={primary} size={15} />
              )}
            </TouchableOpacity>
          ) : null}
        </View>
        <Text style={styles.InputLabel}>New Password</Text>
        <View style={styles.inputWrapper}>
          <View style={styles.width}>
            <PasswordInput
              value={newPassword}
              onChangeText={newPassword => {
                setNewPassword(newPassword);
              }}
              placeholder="New Password"
              keyboardType="default"
              secureTextEntry={showPassword2}
            />
          </View>
          {newPassword.length > 0 ? (
            <TouchableOpacity
              style={styles.eye}
              onPress={() => setShowPassword2(!showPassword2)}>
              {showPassword2 ? (
                <EntypoIcon name="eye" color={primary} size={15} />
              ) : (
                <EntypoIcon name="eye-with-line" color={primary} size={15} />
              )}
            </TouchableOpacity>
          ) : null}
        </View>
        <Text style={styles.InputLabel}>Confirm Password</Text>
        <View style={styles.inputWrapper}>
          <View style={styles.width}>
            <PasswordInput
              value={confirmPassword}
              onChangeText={confirmPassword => {
                setConfirmPassword(confirmPassword);
              }}
              placeholder="Confirm Password"
              keyboardType="default"
              secureTextEntry={showPassword3}
            />
          </View>
          {confirmPassword.length > 0 ? (
            <TouchableOpacity
              style={styles.eye}
              onPress={() => setShowPassword3(!showPassword3)}>
              {showPassword3 ? (
                <EntypoIcon name="eye" color={primary} size={15} />
              ) : (
                <EntypoIcon name="eye-with-line" color={primary} size={15} />
              )}
            </TouchableOpacity>
          ) : null}
        </View>
        <View>
          <Button title="Change Password" action={handleChangePassword} />
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;
