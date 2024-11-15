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
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import backArrow from '../../asset/icons/greerArrowLeft.png';
import blackArrow from '../../asset/icons/blackArrow.png';
import Google from '../../asset/icons/Google.png';
import Apple from '../../asset/icons/Apple.png';
import bankIcon from '../../asset/citi.png';
import FloatingLabelInput from '../../component/TextInput';
import CommonButton from '../../component/button';

const {width, height} = Dimensions.get('window');
const AddBank = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [bankName, setBankName] = useState('');
  const [ifscCode, setIfscCode] = useState('');

  const handleAddMoney = () => {
    // Assuming money is added successfully
    setIsModalVisible(true);
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
            onPress={() => navigation.goBack()}
            style={styles.backButton}
            activeOpacity={0.7}>
            <Image source={backArrow} style={styles.backArrow} />
          </TouchableOpacity>

          <Text style={styles.title}>Bank</Text>

          {/* Chat Button aligned to flex-end */}
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            style={styles.chatButton}>
            <Image
              source={require('../../asset/icons/chatgreen.png')}
              style={styles.chatButtonImage}
            />
          </TouchableOpacity> */}
        </View>
        {/* Styled Text for Existing Banks */}
        <View style={styles.existingBanksContainer}>
          <Text style={styles.existingBanksText}>Existing Banks</Text>
        </View>
        <View style={[styles.bankInfoContainerBank]}>
          <Image source={bankIcon} style={styles.bankIcon} />
          <View style={styles.bankDetails}>
            <Text style={styles.bankValue}>Citi bank</Text>
            <Text style={styles.bankLabel}>Account Number - 123456789012</Text>
          </View>
          <Image source={blackArrow} style={styles.blackArrowIcon} />
        </View>
        <View style={styles.existingBanksContainer}>
          <Text style={styles.existingBanksText}>Add Bank</Text>
        </View>
        <View style={styles.inputContainer}>
          <FloatingLabelInput
            label="Account Number"
            value={accountNumber}
            onChangeText={setAccountNumber}
            keyboardType="numeric" // Change to 'numeric' as it's an account number
          />

          {/* Account Holder Name Input */}
          <FloatingLabelInput
            label="Account holder name"
            value={accountHolderName}
            onChangeText={setAccountHolderName}
            keyboardType="default" // Use default keyboard type
          />

          {/* Bank Name Input */}
          <FloatingLabelInput
            label="Bank Name"
            value={bankName}
            onChangeText={setBankName}
            keyboardType="default" // Default for bank name
          />

          {/* IFSC Code Input */}
          <FloatingLabelInput
            label="IFSC code"
            value={ifscCode}
            onChangeText={setIfscCode}
            keyboardType="default" // Default for IFSC code
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CommonButton title="Save" onPress={() => navigation.navigate('WithdrawMoney')} />
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
    justifyContent: 'space-between', // This will space out the items in the row
    marginBottom: 20,
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

  // Chat button styles
  chatButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  chatButtonImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    flex: 1,
    color: 'black',
    position:'relative',
    marginRight:50

 },
  bankInfoContainerlogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 20,
    width: '100%',
    height: 60,
    alignItems: 'center',
    borderColor: '#dadce0',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  bankInfoContainerBank: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    height: 80,
    alignItems: 'center',
    borderColor: 'black',
  },

  bankInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    height: 60,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  blackArrowIcon: {
    width: 8,
    height: 12,
    resizeMode: 'contain',
  },
  bankDetails: {
    flex: 1,
  },
  bankLabel: {
    marginTop: 3,
    fontSize: 14,
    fontWeight: '500',
    color: '#a8a8a8',
  },
  bankValue: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    marginBottom: -2,
  },
  bankIcon: {
    width: 48,
    height: 48,
    marginRight: 20,
    resizeMode: 'contain',
  },
  bankIconlogo: {
    width: 20,
    height: 20,
    marginRight: 20,
    resizeMode: 'contain',
  },
  existingBanksContainer: {
    width: '100%', // Ensure this takes up the full width
    paddingHorizontal: 1, // Optional, adds padding if necessary
    marginBottom: 10, // Adds spacing below the text
    marginTop: 10,
  },

  existingBanksText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    textAlign: 'left', // Ensures the text is left-aligned
  },
  inputContainer: {
    width: width * 0.85,
    paddingBottom: 20,
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: 'center',
    marginHorizontal: 20,
  },
});

export default AddBank;
