import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import styles from './styles';

const Header = ({title, icon, action, searchInput, searchAction, doSearch}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => {
            action();
          }}>
          <EntypoIcon style={styles.icon} name={icon} color="white" size={20} />
        </TouchableOpacity>

        <Text style={styles.headerLabel}>{title}</Text>

        <View>
          {searchInput ? (
            doSearch ? (
              <TouchableOpacity
                onPress={() => {
                  searchAction();
                }}>
                <EntypoIcon
                  style={styles.icon}
                  name="circle-with-cross"
                  color="red"
                  size={20}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => searchAction()}>
                <EntypoIcon
                  style={styles.icon}
                  name="magnifying-glass"
                  color="white"
                  size={20}
                />
              </TouchableOpacity>
            )
          ) : null}
        </View>
      </View>
    </View>
  );
};

{
  /* <TouchableOpacity
                onPress={() => {
                  setIsOpen(false);
                  setDoSearch(!doSearch);
                }}>
                <EntypoIcon
                  style={styles.icon}
                  name="circle-with-cross"
                  color="red"
                  size={20}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setIsOpen(false);
                  setDoSearch(!doSearch);
                }}>
                <EntypoIcon
                  style={styles.icon}
                  name="magnifying-glass"
                  color="white"
                  size={20}
                />
              </TouchableOpacity> */
}

export default Header;
