import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Linking,
  Platform,
  AppState,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FlashMessage from 'react-native-flash-message';
import {useSelector, useDispatch} from 'react-redux';

import styles from './styles';
import Layout from '../../components/Layout';
import InputText from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import LoadingButton from '../../components/LoadingButton';
import {logo, primary} from '../../global';
import signUp from '../../redux/actions/signupAction';

const SignUp = ({navigation}) => {
  const [data, setData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
    }),
    [showPassword, setShowPassword] = useState(true);

  const dispatch = useDispatch();
  const dataResult = useSelector(state => state.signupReducer);

  useEffect(() => {
    if (dataResult.message === 'Registration was successful') {
      setData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
      });
    }
  }, [dataResult]);

  const handleSignup = () => {
    Keyboard.dismiss();
    dispatch(signUp(data));
  };

  useEffect(() => {
    Linking.getInitialURL()
      .then(url => {
        if (url === 'http://alomobile.com/reset') {
          console.log('oooo', url);
        }
      })
      .catch(err => {});

    Linking.addListener('url', url => {
      console.log('eee', url);
    });

    return () => {
      Linking.removeEventListener('url');
    };
  }, []);

  return (
    <Layout>
      <ScrollView
        contentContainerStyle={styles.scrollFlex}
        showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.header}>Sign up</Text>

          <View style={styles.InputRow}>
            <Text style={styles.InputLabel}>Firstname</Text>
            <InputText
              value={data.firstname}
              onChangeText={firstname => {
                setData({...data, firstname});
              }}
              placeholder="Firstname"
            />
          </View>
          <View style={styles.InputRow}>
            <Text style={styles.InputLabel}>Lastname</Text>
            <InputText
              value={data.lastname}
              onChangeText={lastname => {
                setData({...data, lastname});
              }}
              placeholder="Lastname"
            />
          </View>
          <View style={styles.InputRow}>
            <Text style={styles.InputLabel}>Email</Text>
            <InputText
              name="email"
              value={data.email}
              keyboardType="email-address"
              onChangeText={email => {
                setData({...data, email});
              }}
              placeholder="example@domain.com"
            />
          </View>
          <View style={styles.InputRow}>
            <Text style={styles.InputLabel}>Phone number</Text>
            <InputText
              value={data.phone}
              keyboardType="number-pad"
              onChangeText={phone => {
                setData({...data, phone});
              }}
              placeholder="08012345678"
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
                  placeholder="Password"
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
                    <EntypoIcon
                      name="eye-with-line"
                      color={primary}
                      size={15}
                    />
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
                title={dataResult.loading ? 'Please wait' : 'Sign up'}
                action={handleSignup}
              />
            )}
          </View>

          <View style={styles.footer}>
            <Text style={styles.labelText}>Have an account already?</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('SignIn')}>
              <View style={styles.row}>
                <Text style={styles.signupLabel}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <FlashMessage position="top" />
    </Layout>
  );
};

export default SignUp;
