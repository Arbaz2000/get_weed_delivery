import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import CommonButton from '../../component/button';
import BorderInput from '../../component/BorderInput'; // Using BorderInput for all fields
import backArrow from '../../asset/icons/greerArrowLeft.png';
import cardIcon from '../../asset/visa.png'; // Update with your actual icon path

const AddDebitCard = () => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [saveCard, setSaveCard] = useState(false);

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
            onPress={() => navigation.goBack()}
            style={styles.backButton}
            activeOpacity={0.7}>
            <Image source={backArrow} style={styles.backArrow} />
          </TouchableOpacity>
          <Text style={styles.title}>Add Debit Card Details</Text>
        </View>

        {/* Card Number Input */}
        <View style={styles.inputRow}>
          <BorderInput
            placeholder="Card Number"
            value={cardNumber}
            onChangeText={setCardNumber}
            style={styles.cardNumberInput}
            inputStyle={styles.input}
            placeholderStyle={styles.placeholder}
          />
          <Image source={cardIcon} style={styles.cardIcon} />
        </View>

        {/* Expiry Date and CVV Inputs */}
        <View style={styles.inputRow}>
          <BorderInput
            placeholder="Expiry Date"
            value={expiryDate}
            onChangeText={setExpiryDate}
            style={styles.expiryInput}
            inputStyle={styles.input}
            placeholderStyle={styles.placeholder}
          />
          <BorderInput
            placeholder="CVV"
            value={cvv}
            onChangeText={setCvv}
            style={styles.cvvInput}
            inputStyle={styles.input}
            placeholderStyle={styles.placeholder}
          />
        </View>
        <View style={styles.inputRow}>
          <BorderInput
            placeholder="Card Number"
            value={name}
            onChangeText={setName}
            style={styles.cardNumberInput}
            inputStyle={styles.input}
            placeholderStyle={styles.placeholder}
          />
          
        </View>

        {/* Checkbox for Save Card */}
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={saveCard}
            onValueChange={setSaveCard}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>
            Save this card for future use
          </Text>
        </View>
      </ScrollView>

      {/* Save Button */}
      <View style={styles.buttonContainer}>
        <CommonButton title="Save" onPress={() => navigation.goBack()} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 25,
    flexGrow: 1,
    marginHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    flex: 1,
    color: 'black',
    // marginLeft: 36,
    position:'relative'
  },
  backButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  backArrow: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap:10,
    marginBottom: 20, // Spacing between the rows
  },
  cardNumberInput: {
    flex: 3,
  },
  expiryInput: {
    flex: 1,
  },
  cvvInput: {
    flex: 1,
  },
  cardIcon: {
    width: 55,
    height: 16,
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{translateY: -12}],
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 20,
    // Align checkbox to the left
    justifyContent: 'flex-start',
    width: '100%', // Ensure it takes up full width
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: 'black',
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  input: {
    height: '100%',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    color: 'black',
    paddingLeft: 10,
  },
  placeholder: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
  },
});

export default AddDebitCard;
