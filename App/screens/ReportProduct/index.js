import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {launchImageLibrary} from 'react-native-image-picker';

import styles from './styles';
import Header from '../../components/Header';
import {primary} from '../../global';

const ReportProduct = ({navigation, route}) => {
  const [report, setReport] = useState(''),
    [image, setImage] = useState(null);

  //From the Products screen
  const {productId} = route.params;
  console.log(productId);

  const goBack = () => {
    navigation.goBack();
  };

  const reportImage = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
    };

    launchImageLibrary(options, result => {
      // if (result.fileSize > 100000) {
      //   Alert.alert('', 'Photo size must not be greater than 100KB');
      //   return;
      // }
      setImage(result.base64);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Report Product" icon="chevron-left" action={goBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={styles.wrapper}>
            <Text style={styles.label}>Report Product</Text>
            <TextInput
              style={styles.textArea}
              value={report}
              onChangeText={report => setReport(report)}
              numberOfLines={5}
            />
          </View>

          <View style={styles.wrapper}>
            <Text style={[styles.label, {paddingBottom: 0}]}>
              Add evidence (Photo)
            </Text>
            <TouchableOpacity onPress={() => reportImage()}>
              <EntypoIcon
                style={styles.icon}
                name="image"
                color={primary}
                size={50}
              />
            </TouchableOpacity>
            {image ? (
              <View>
                <View style={styles.removeIcon}>
                  <TouchableOpacity onPress={() => setImage('')}>
                    <EntypoIcon
                      style={styles.icon}
                      name="circle-with-cross"
                      color="red"
                      size={30}
                    />
                  </TouchableOpacity>
                </View>

                <Image
                  style={styles.image}
                  source={{uri: `data:image/jpeg;base64,${image}`}}
                />
              </View>
            ) : null}
          </View>
          <TouchableOpacity style={styles.submitBTN}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ReportProduct;
