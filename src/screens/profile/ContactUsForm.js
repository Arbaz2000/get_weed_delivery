import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Image,
  SafeAreaView
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import uploadcloud from '../../asset/uploadcloud.png';
import Accordion from '../../component/Accordion';
import Language from '../../utils/Language';
import i18next from '../../services/i18next';
import {useTranslation} from 'react-i18next';

const {width} = Dimensions.get('window');
 


const GreenButton = ({title, onPress}) => (
  <TouchableOpacity style={styles.greenButton} onPress={onPress}>
    <Text style={styles.greenButtonText}>{title}</Text>
  </TouchableOpacity>
);
  
const FloatingLabelInput = ({label, value, onChangeText, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.floatingLabelContainer}>
      <Text style={[styles.floatingLabel, {top: isFocused || value ? -2 : 19}]}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </View>
  );
};

const ContactUsForm = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [userType, setUserType] = useState(false); // State for Boats and Animals accordion
const [isAccordionOpen, setAccordionOpen] = useState(false); // Track if the accordion is open
const [selectedItem, setSelectedItem] = useState(null);const handleAccordionToggle = () => {
  setAccordionOpen(!isAccordionOpen); // Toggle the accordion open/close state
};
const items = [
  {item: t('option1')},
  {item: t('option2')},
  {item: t('option3')},
];
const handleItemSelect = item => {
  setSelectedItem(item); // Handle item selection
};
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.topText}>{t('contact')}</Text>

        <View style={styles.inputContainer}>
          <FloatingLabelInput
            label={t('fname')}
            value={firstName}
            onChangeText={setFirstName}
          />
          <FloatingLabelInput
            label={t('lname')}
            value={lastName}
            onChangeText={setLastName}
          />
          <FloatingLabelInput
            label={t('email')}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <FloatingLabelInput
            label={t('phone_placeholder')}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="email-address"
          />
          <FloatingLabelInput
            label={t('dob')}
            value={dob}
            onChangeText={setDob}
          />
          {/* <Accordion
            title="User Type"
            items={['Type 1', 'Type 2', 'Type 3']} // Replace with actual items
            isOpen={userType}
            toggle={() => setUserType(!userType)}
            onSelect={() => {}}
          /> */}
          <Accordion
            title={t('usertype')}
            items={items}
            onSelect={handleItemSelect}
            isOpen={isAccordionOpen}
            toggle={handleAccordionToggle}
            borderColor="#333333"
          />
          <FloatingLabelInput
            label={t('Idno')}
            value={idNumber}
            onChangeText={setIdNumber}
          />
          <FloatingLabelInput
            label={t('description')}
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={3}
            style={styles.addressInput}
          />
        </View>

        <View style={styles.uploadContainer}>
          <Text style={styles.uploadText}>{t('uploaddocuments')}</Text>
          <View style={styles.uploadRow}>
            <TouchableOpacity style={styles.uploadButton}>
              <View style={styles.uploadButtonContent}>
                <Image
                  source={uploadcloud}
                  style={[styles.uploadIcon, {width: 23, height: 20}]}
                />
                <Text style={styles.uploadButtonText}>{t('front')}</Text>
                <Text style={styles.uploadButtonSubtext}>
                {t('uploadlicense')}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.uploadButton}>
              <View style={styles.uploadButtonContent}>
                <Image
                  source={uploadcloud}
                  style={[styles.uploadIcon, {width: 23, height: 20}]}
                />
                <Text style={styles.uploadButtonText}>{t('back')}</Text>
                <Text style={styles.uploadButtonSubtext}>
                {t('uploadlicense')}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <GreenButton
            title={t('next')}
            // onPress={() => navigation.navigate('TabNavigator')}
          />
        </View>
      </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ContactUsForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
  },
  inputContainer: {
    width: width * 0.85,
    // paddingBottom: 20,
  },
  floatingLabelContainer: {
    position: 'relative',
    marginVertical: 10,
  },
  floatingLabel: {
    position: 'absolute',
    left: 10,
    color: 'gray',
    fontSize: 12,
    transition: 'top 0.2s ease',
    marginTop: 3,
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  uploadContainer: {
    width: width * 0.85,
    // marginTop: 20,
    // marginRight: 20,
  },
  uploadText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',
    fontFamily: 'Inter',
    textAlign: Platform.OS === 'ios' ? 'left' : 'left',
    // marginTop: -30,
  },
  uploadRow: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  uploadButtonContent: {
    alignItems: 'center',
    width: '100%', // Centers content horizontally
  },
  uploadButton: {
    height: 130,
    width: '49%',
    borderColor: '#409C59',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#ecf6ee',
    borderStyle: 'dashed',
  },
  uploadButtonSubtext: {
    fontFamily: 'Mulish', // Set font-family to Mulish
    fontSize: 12, // Set font size to 12px
    fontWeight: '600', // Set font weight to 600
    lineHeight: 15.06, // Set line height to 15.06px
    textAlign: 'center', // Center-align text
    color: 'rgba(51,51, 51, 1)',
  },
  uploadButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(51,51, 51, 1)',
    textAlign: 'center',
    fontFamily: 'Mulish',
    marginTop: 4,
    marginBottom: 6,
  },
  buttonContainer: {
    paddingTop: 10,
    width: width * 0.85,
    paddingBottom: 30,
  },
  greenButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#409C59',
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
  topText: {
    textAlign: 'left',
    fontSize: 24,
    width: width * 0.85,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',
    fontFamily: 'Mulish',
    marginBottom: 10,
  },
  addressInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: 'transparent',
  },
});
