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
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonButton from '../../component/button';
import backbutton from '../../asset/backbutton.png';
import ProductImage from '../../asset/ProductImage.png';
import uploadcloud from '../../asset/uploadcloud.png';
import CheckBox from '@react-native-community/checkbox'; // Import CheckBox
import Accordion from '../../component/Accordion'; // Import Accordion component
import bike from '../../asset/icons/tabler_bike-filled.png';
import car from '../../asset/icons/tabler_car-filled.png';
import truck from '../../asset/icons/mdi_truck.png';

const {width} = Dimensions.get('window');

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

const VehicleDetails = () => {
  const navigation = useNavigation();
  const [ProductName, setProductName] = useState('');
  const [pricePerGram, setPricePerGram] = useState('');
  const [ProductDetails, setProductDetails] = useState('');
  const [Cbd, setCbd] = useState('');
  const [Stock, setStock] = useState('');
  const [lanzer, setLanzer] = useState('');
  const [isPrescriptionRequired, setIsPrescriptionRequired] = useState(false);
  const [Cannabistype, setCannabistype] = useState(false); // State for Cannabis type accordion
  const [Cannabisform, setCannabisform] = useState(false); // State for Cannabis form accordion
  const [projectCategoryOpen, setProjectCategoryOpen] = useState(false); // State for Project Category accordion

  const handleLanzerChange = Number => {
    const numericValue = parseInt(Number, 10);
    if (
      Number === '' ||
      (!isNaN(numericValue) && numericValue >= 10 && numericValue <= 28)
    ) {
      setLanzer(Number);
    }
  };
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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.topText}>Vehicle Details & Personal Details</Text>
        <Text style={styles.descriptionText}>
          Fill Your Personal Information Below Or Register With Your Social
          Account
        </Text>

        <View style={styles.inputContainer}>
          {/* Cannabis Type Accordion with icons for each item */}
          <Accordion
            title="Cannabis Type"
            items={[
              {item: 'Bike', icon: bike},
              {item: 'Truck', icon: truck},
              {item: 'Car', icon: car},
            ]}
            isOpen={Cannabistype}
            toggle={() => setCannabistype(!Cannabistype)}
            onSelect={item => console.log(item)} // Handle item selection if needed
          />

          {/* Color Accordion */}
          <Accordion
            title="Color"
            items={[{item: 'Red'}, {item: 'White'}, {item: 'Blue'}]}
            isOpen={projectCategoryOpen}
            toggle={() => setProjectCategoryOpen(!projectCategoryOpen)}
            onSelect={() => {}}
          />

          {/* ID Type Accordion */}
          <Accordion
            title="ID Type"
            items={[{item: 'Type 1'}, {item: 'Type 2'}, {item: 'Type 3'}]}
            isOpen={Cannabisform}
            toggle={() => setCannabisform(!Cannabisform)}
            onSelect={() => {}}
          />

          {/* Other Inputs */}
          <FloatingLabelInput
            label="License plate"
            value={ProductName}
            onChangeText={setProductName}
            keyboardType="email-address"
          />
          <FloatingLabelInput
            label="Driving License / Identity card / Passport"
            value={pricePerGram}
            onChangeText={setPricePerGram}
            buttonEnabled={true} // Button is enabled
            buttonText="Upload" // Custom button text
            onButtonPress={handleUploadPress}
          />
          <FloatingLabelInput
            label="Document ID"
            value={ProductDetails}
            onChangeText={setProductDetails}
            keyboardType="email-address"
          />

          {/* Checkbox for prescription requirement */}
          <View style={styles.checkboxContainer}>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={isPrescriptionRequired}
                onValueChange={setIsPrescriptionRequired}
                style={styles.checkbox}
              />
            </View>
            <Text style={styles.checkboxLabel}>
              Don’t have Driving License / Identity card / Passport
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.buttonContainer,
            {width: '85%', alignItems: 'center'},
          ]}>
          <CommonButton
            title="Sign Up"
            onPress={() => navigation.navigate('ApprovalWaitng')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VehicleDetails;

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
    paddingBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter',
    color: 'rgba(51, 51, 51, 1)',
    marginRight: 40,
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    padding: 10,
  },
  backButtonImage: {
    width: 45,
    height: 45,
  },
  floatingLabelContainer: {
    position: 'relative',
    marginVertical: 10,
  },
  floatingLabel: {
    position: 'absolute',
    marginTop: 5,
    left: 10,
    color: 'gray',
    fontSize: 10,
    marginRight: 5,
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
  checkboxContainer: {
    flexDirection: 'row',
    width: '90%',
    marginVertical: 10,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    marginRight: 1,
    width: '11%',
    height: '85%',
  },
  checkbox: {
    marginBottom: 10,
  },
  checkboxLabel: {
    fontSize: 15,
    color: 'rgba(51, 51, 51, 1)',
    marginLeft: 5,
    fontWeight: '600',
    fontFamily: 'Mulish',
  },
  buttonContainer: {
    paddingTop: 10,
    width: 358,
    paddingBottom: 30,
  },
  uploadButton: {
    position: 'absolute',
    right: 10, // Aligns the button to the right inside the input field
    top: '40%',
    transform: [{translateY: -12}], // Vertically center the button
    backgroundColor: '#409C59',
    paddingVertical: 8,
    paddingHorizontal: 10,
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
    color: '#333333',
    fontFamily: 'Mulsih',
  },
});
