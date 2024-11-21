import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useState, createRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import Scanface from '../asset/SVG/Scanface.png';
import CommonButton from '../component/button';
import Language from '../utils/Language';
import i18next from '../services/i18next';
import {useTranslation} from 'react-i18next';

const {width} = Dimensions.get('window');

const ScanFace = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {},
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {},
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{t('scan')}</Text>
        <View style={styles.imageContainer}>
          <Image source={Scanface} style={styles.logo} />
        </View>
        <View style={styles.buttonContainer}>
          <CommonButton
            title={t('next')}
            onPress={() => navigation.navigate('PersonalInformation')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ScanFace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  bottomText: {
    fontSize: 14,
    color: '#409C59',
    marginBottom: 20,
    fontWeight: 'heavy',
  },
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 70,
  },
  buttonContainer: {
    marginTop: 100,
    width: width * 0.85,
    paddingBottom: 30,
  },
  greenButton: {
    width: '100%',
    height: 45,
    backgroundColor: 'rgba(64, 156, 89, 1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  greenButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },

  imageContainer: {
    width: 296,
    height: 296,
    padding: 48,
    marginTop: 90,
    borderRadius: 62,
    borderColor: 'white', 
    borderWidth: 2,
    backgroundColor: 'background: rgba(255, 255, 255, 1)',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '0px 4px 4px 0px rgba(0, 0, 0, 0.85)', 
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1, 
    shadowRadius: 6, 
    elevation: 8, 
  },

  logo: {
    width: 200,
    height: 200,
    marginRight: 5,
    marginTop: 5,
    marginBottom:5,
    marginLeft:5,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 22,
    color: '#333333',
    fontWeight: '600',
    lineHeight: 26.63, 
    textAlign: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 70,
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#409C59',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    color: '#409C59',
  },
  subsubText: {
    fontSize: 12,
    color: 'grey',
    textAlign: 'center',
    paddingBottom: 20,
    marginTop: 20,
  },
});
