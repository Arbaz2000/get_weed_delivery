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
  Image,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FloatingLabelInput from '../component/TextInput';
import backbutton from '../asset/backbutton.png';
import Ellipse12 from '../asset/faces/Ellipse13.png';
import CommonButton from '../component/button';
import DateInputField from '../component/DateInputField';
import Download from '../component/Download';

const {width, height} = Dimensions.get('window');

const EditUserProfile = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // Store selected date
const [selectedLicense, setSelectedLicense] = useState(null);

  // Show Date Picker
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  // Hide Date Picker
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  // Handle Date Picked
  const handleConfirm = date => {
    setSelectedDate(date); // Set the selected date
    hideDatePicker(); // Close the picker
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.semiCircle}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Image source={backbutton} style={styles.backButtonImage} />
          </TouchableOpacity>
          <Text style={styles.profileLabel}>Edit Profile</Text>
          <Image source={Ellipse12} style={styles.profileImage} />
          <Text style={styles.profileName}>Your Name</Text>
          <Text style={styles.profileEmail}>email@example.com</Text>
        </View>

        {/* Floating label inputs */}
        <View style={styles.inputContainer}>
          <FloatingLabelInput
            label="Name"
            value={name}
            onChangeText={setName}
          />
          <FloatingLabelInput label="ID" value={id} onChangeText={setId} />
          <FloatingLabelInput
            label="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          <FloatingLabelInput
            label="Gmail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Increase the width of the DOB input field */}
          <DateInputField
            label="DOB"
            value={selectedDate}
            onDateChange={setSelectedDate}
            isDatePickerVisible={isDatePickerVisible}
            showDatePicker={showDatePicker}
            hideDatePicker={hideDatePicker}
            borderColorSelect="black"
            paddingSelect={0}
          />
          <Download label="License" value={selectedLicense} />
        </View>

        <View style={styles.buttonContainer}>
          <CommonButton
            title="Save"
            onPress={() => navigation.navigate('ProfileVehicle')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  scrollContainer: {alignItems: 'center', paddingTop: 25},

  semiCircle: {
    width: '100%',
    height: height * 0.35, // Adjusting semi-circle height to 35% of screen height
    backgroundColor: '#409C59',
    borderBottomLeftRadius: width / 2,
    borderBottomRightRadius: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    marginTop: -40, // Reduced margin to prevent overflow on smaller screens
  },

  profileLabel: {
    position: 'absolute',
    top: 20,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '700',
  },
  profileImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.1,
    marginBottom: 10,
    borderWidth: 2,
    marginTop: 5,
  },
  profileName: {
    fontSize: 22,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '700',
    fontFamily: 'Inter',
  },
  profileEmail: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  buttonContainer: {
    marginTop: 30,
    width: width * 0.85,
    paddingBottom: 30,
  },

  inputContainer: {
    width: '80%',
    marginTop: 20,
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 15,
    padding: 10,
  },
  backButtonImage: {
    width: 45,
    height: 45,
  },

  // Styling for the Date of Birth input and calendar icon
  dobInputField: {
    borderWidth: 1,
    borderColor: '#878787',
    borderRadius: 5, // Rounded corners
    marginTop: 10,
    width: '100%', // Ensure it takes full width of the parent container
  },
});

export default EditUserProfile;
