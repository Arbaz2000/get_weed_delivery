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

  return (
    <View style={styles.floatingLabelContainer}>
      <Text style={[styles.floatingLabel, {top: isFocused || value ? -2 : 19}]}>
        {label}
      </Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, buttonEnabled && styles.inputWithButton]} // Add a new style when button is enabled
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {buttonEnabled && (
          <TouchableOpacity style={styles.uploadButton} onPress={onButtonPress}>
            <Text style={styles.uploadButtonText}>{buttonText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const PersonalInformation = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [ScanFace, setScanFace] = useState('');

  const handleUploadPress = () => {
    // Handle the upload action, e.g., open file picker or camera
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
        <Text style={styles.topText}>Personal Details</Text>
        <Text style={styles.descriptionText}>
          Fill Your Personal Information Below Or Register With Your Social
          Account
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
                label="First Name"
                value={firstName}
                onChangeText={setFirstName}
              />
            </View>

            <View style={{flex: 1}}>
              <FloatingLabelInput
                label="Last Name"
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
          </View>

          <FloatingLabelInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <FloatingLabelInput
            label="Date of Birth"
            value={dob}
            onChangeText={setDob}
          />

          {/* Scan Face field with dynamic button */}
          <FloatingLabelInput
            label="Scan Face"
            value={ScanFace}
            onChangeText={setScanFace}
            buttonEnabled={true} // Button is enabled
            buttonText="Upload" // Custom button text
            onButtonPress={handleUploadPress}
          />
          <View style={styles.buttonContainer}>
            <GreenButton
              title="Next"
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
    paddingTop: 25,
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
    paddingRight: 50, // This ensures space for the button inside
  },
  inputWithButton: {
    paddingRight: 10, // Adjust padding when button is present
  },
  uploadButton: {
    position: 'absolute',
    right: 10, // Aligns the button to the right inside the input field
    top: '40%',
    transform: [{translateY: -12}], // Vertically center the button
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
    width: width * 0.8,
    color: '#333333',
    marginBottom: 10,
  },
  descriptionText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '400',
    width: width * 0.8,
    marginBottom: 20,
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
});
