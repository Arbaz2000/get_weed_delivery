import React, {useState} from 'react';
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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Language from '../../utils/Language';
import i18next from '../../services/i18next';
import {useTranslation} from 'react-i18next';
import DocumentPicker from 'react-native-document-picker';


const {width} = Dimensions.get('window');

// Green button component
const GreenButton = ({title, onPress}) => (
  <TouchableOpacity style={styles.greenButton} onPress={onPress}>
    <Text style={styles.greenButtonText}>{title}</Text>
  </TouchableOpacity>
);

// Floating label input component with an additional button
const FloatingLabelInput = ({
  label,
  value,
  onChangeText,
  buttonEnabled = false,
  buttonText = 'Upload',
  onButtonPress,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFileSelection = async () => {
    try {
      // Open the file picker
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // You can customize the file types here
      });
      
      // Handle the selected file
      console.log(res);
      onChangeText(res[0].name); 
      // You can process the file here, for example, uploading it or saving the file path.
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // If the user cancels the picker
        console.log('User cancelled the file picker');
      } else {
        // Handle other errors
        console.error('File picker error: ', err);
      }
    }
  };

  return (
    <View style={styles.floatingLabelContainer}>
      <Text
        style={[
          styles.floatingLabel,
          {top: isFocused || value ? -2 : 19, transform: [{scale: isFocused || value ? 0.8 : 1}]}, // Add scaling animation
        ]}
      >
        {label}
      </Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, buttonEnabled && styles.inputWithButton]} // Adjusting input style when button is enabled
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={true} // Allow text input for this field
          {...props}
        />
        {value ? <Text style={styles.documentName}>{value}</Text> : null}
        {buttonEnabled && (
          <TouchableOpacity style={styles.uploadButton} onPress={handleFileSelection}>
            <Text style={styles.uploadButtonText}>{buttonText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const PersonalInformation = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [ScanFace, setScanFace] = useState('');

  const handleUploadPress = () => {
    console.log('Upload button pressed');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.topText}>{t('personal')}</Text>
        <Text style={styles.descriptionText}>
         {t('fill_info')}
        </Text>

        <View style={styles.inputContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              width: '100%',
            }}>
            <View style={{flex: 1, marginRight: 10}}>
              <FloatingLabelInput
                label={t('fname')}
                value={firstName}
                onChangeText={setFirstName}
              />
            </View>

            <View style={{flex: 1}}>
              <FloatingLabelInput
                label={t('lname')}
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
          </View>

          <FloatingLabelInput
            label={t('ename')}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <FloatingLabelInput
            label={t('dob')}
            value={dob}
            onChangeText={setDob}
          />

          {/* Scan Face field with dynamic button */}
          <FloatingLabelInput
            label={t('scan')}
            value={ScanFace}
            onChangeText={setScanFace}
            buttonEnabled={true} // Button is enabled
            buttonText={t('upload')} // Custom button text
            onButtonPress={handleUploadPress}
          />
          <View style={styles.buttonContainer}>
            <GreenButton
              title={t('next')}
              onPress={() => navigation.navigate('VehicleDetails')}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:Platform.OS === 'ios' ?40: 25,
  },
  inputContainer: {
    width: width * 0.85,
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
    marginTop: 3,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 60,
  },
  input: {
    flex: 1,
    fontSize: 18,
    backgroundColor: 'transparent',
    paddingRight: 50, 
  },
  inputWithButton: {
    paddingRight: 10, 
  },
  uploadButton: {
    position: 'absolute',
    right: 10, 
    top: '40%',
    transform: [{translateY: -12}],
    backgroundColor: '#409C59',
    paddingVertical: 8,
    paddingHorizontal: 13,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  topText: {
    fontFamily: 'Mulish',
    textAlign: 'left',
    fontSize: 24,
    fontWeight: '600',
    width: width * 0.85,
    color: '#333333',
    marginBottom: 10,
  },
  descriptionText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '400',
    width: width * 0.85,
    marginBottom: 20,
    color:'#333333',
    fontFamily:'Mulsih',
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
  buttonContainer: {
    width: width * 0.85,
    paddingBottom: 14,
  },
   documentName: {
    fontSize: 12,
    position: 'absolute',
    marginTop: 15,
    left: 10,
    color: 'black',
    width: '40%', // Ensure it takes up the full width of the parent container
  }
});
