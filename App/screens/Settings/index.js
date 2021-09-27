import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import styles from './styles';
import Header from '../../components/Header';
import {primary} from '../../global';

const Settings = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header title="Settings" action={goBack} icon="chevron-left" n />
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.innerRow}
              onPress={() => navigation.navigate('ChangePassword')}>
              <View style={styles.subRow}>
                <EntypoIcon name="lock" color={primary} size={25} />
                <Text style={styles.label}>Change Password</Text>
              </View>
              <EntypoIcon
                name="chevron-small-right"
                color={primary}
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.innerRow}
              onPress={() => navigation.navigate('ChangePhoneNumber')}>
              <View style={styles.subRow}>
                <EntypoIcon name="phone" color={primary} size={25} />
                <Text style={styles.label}>Change Phone number</Text>
              </View>
              <EntypoIcon
                name="chevron-small-right"
                color={primary}
                size={25}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.height} />
        </ScrollView>
      </View>
    </View>
  );
};
export default Settings;
