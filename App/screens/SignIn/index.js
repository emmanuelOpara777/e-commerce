import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Keyboard} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {useSelector, useDispatch} from 'react-redux';

import styles from './styles';
import InputText from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import LoadingButton from '../../components/LoadingButton';
import {logo, primary} from '../../global';

//redux action
import signIn from '../../redux/actions/signinAction';

const SignIn = ({navigation}) => {
  const [data, setData] = useState({
      email: '',
      password: '',
    }),
    [showPassword, setShowPassword] = useState(true);

  const dispatch = useDispatch();
  const dataResult = useSelector(state => state.signinReducer);

  const handleSignin = () => {
    Keyboard.dismiss();
    dispatch(signIn(data));
  };

  useEffect(() => {
    if (dataResult.message === 'Login was successful') {
      setData({
        email: '',
        password: '',
      });
      navigation.navigate('HomeNavigation');
    }
  }, [dataResult]);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.header}>Sign in</Text>

      <View style={styles.InputRow}>
        <Text style={styles.InputLabel}>Username</Text>
        <InputText
          value={data.email}
          onChangeText={email => {
            setData({...data, email});
          }}
          style={[styles.textInput]}
          keyboardType="default"
          placeholder="mor_2314"
        />
      </View>

      <View style={styles.InputRow}>
        <Text style={styles.InputLabel}>Password</Text>
        <View style={styles.inputWrapper}>
          <View style={{width: '95%'}}>
            <PasswordInput
              value={data.password}
              onChangeText={password => {
                setData({...data, password});
              }}
              placeholder="83r5^_"
              keyboardType="default"
              secureTextEntry={showPassword}
            />
          </View>
          {data.password.length > 0 ? (
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
      </View>

      <View>
        {dataResult.loading ? (
          <LoadingButton title="Please wait" />
        ) : (
          <Button
            title="Sign in"
            action={() => {
              handleSignin();
            }}
          />
        )}
      </View>

      <View style={styles.footer}>
        <Text style={styles.labelText}>Forgot Password?</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('ResetPassword')}>
          <View style={styles.row}>
            <Text style={styles.signupLabel}>Reset Password</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.labelText}>No account?</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('SignUp')}>
          <View style={styles.row}>
            <Text style={styles.signupLabel}>Sign up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
