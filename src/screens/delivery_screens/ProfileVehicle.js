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
import backArrow from '../../asset/icons/backArrow.png';

const {width} = Dimensions.get('window');

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
        keyboardType="numeric"
        {...props}
      />
    </View>
  );
};

const ProfileVehicle = () => {
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

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={styles.backButton}
            activeOpacity={0.7}>
            <Image
              source={backArrow}
              style={{width: 16, height: 16}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text
            style={styles.title}
            onPress={() => navigation.navigate('AncillaryAddProducts')}>
            Profile
          </Text>
        </View>

        <View style={styles.inputContainer}>
          {/* Cannabis Type Accordion with icons for each item */}
          <Accordion
            title="Types of Vehicle"
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
            items={[{item: 'red'}, {item: 'White'}, {item: 'Blue'}]}
            isOpen={projectCategoryOpen}
            toggle={() => setProjectCategoryOpen(!projectCategoryOpen)}
            onSelect={() => {}}
          />
          {/* Other Inputs */}
          <FloatingLabelInput
            label="License plate"
            value={ProductName}
            onChangeText={setProductName}
            keyboardType="email-address"
          />
        </View>

        <View
          style={[
            styles.buttonContainer,
            {width: '85%', alignItems: 'center'},
          ]}>
          <CommonButton
            title="Save"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileVehicle;

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
    marginBottom: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter',
    color: 'rgba(51, 51, 51, 1)',
    marginRight: 0,
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    padding: 10,
    backgroundColor: '#409C59',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:30,
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
    fontSize: 12,
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
    marginLeft: 10,
    fontWeight: '600',
    fontFamily: 'Mulish',
  },
  buttonContainer: {
    paddingTop: 10,
    width: 358,
    paddingBottom: 30,
  },
});
