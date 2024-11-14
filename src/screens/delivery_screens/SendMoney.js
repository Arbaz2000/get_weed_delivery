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
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonButton from '../../component/button';
import backArrow from '../../asset/icons/greerArrowLeft.png';
import blackArrow from '../../asset/icons/blackArrow.png';
import bankIcon from '../../asset/face.png';
import checkIcon from '../../asset/okay.png'; // Add check icon or any circular icon you want to use.

const AmountInput = ({value, onChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      {value ? <Text style={styles.currencyLabel}>USD</Text> : null}
      <TextInput
        style={[
          styles.input,
          value ? styles.inputWithValue : styles.inputEmpty,
        ]}
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        placeholder="USD"
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
      />
    </View>
  );
};

const SendMoney = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

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
          <Text style={styles.title}>Send Money</Text>
        </View>

        <View style={styles.bankInfoContainer}>
          <Image source={bankIcon} style={styles.bankIcon} />
          <View style={styles.bankDetails}>
            <Text style={styles.bankValue}>Name</Text>
            <Text style={styles.bankLabel}>****** 9830</Text>
          </View>
        </View>

        <AmountInput value={amount} onChangeText={setAmount} />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CommonButton title="Send Money" onPress={handleAddMoney} />
      </View>

      {/* Modal Drawer */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {/* Circular Icon */}
            <View style={styles.iconWrapper}>
              <Image source={checkIcon} style={styles.icon} />
            </View>

            <Text style={styles.modalText}>Money Added Successfully!</Text>

            {/* Dotted Divider */}
            <View style={styles.dottedDivider} />
            <View style={styles.transferDetailsContainer}>
              <Text style={styles.transferLabelHeading}>Transfer details</Text>
            </View>
            {/* Transfer Details */}

            <View style={styles.transferDetailsContainer}>
              <Text style={styles.transferLabel}>Amount</Text>
              <Text style={styles.transferValue}>{amount} USD</Text>
            </View>
            <View style={styles.transferDetailsContainer}>
              <Text style={styles.transferLabel}>Date</Text>
              <Text style={styles.transferValue}>2024-11-14</Text>
            </View>
            <View style={styles.transferDetailsContainer}>
              <Text style={styles.transferLabel}>Reference Number</Text>
              <Text style={styles.transferValue}>123456789</Text>
            </View>
            <View style={styles.dottedDivider} />
            {/* Close Button */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginLeft: -36,
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  backButton: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'black',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  backArrow: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  bankInfoContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(64, 156, 89, 1)',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    height: 80,
    alignItems: 'center',
  },
  bankIcon: {
    width: 48,
    height: 48,
    marginRight: 20,
    resizeMode: 'contain',
  },
  blackArrowIcon: {
    width: 8,
    height: 12,
    marginLeft: 20,
    resizeMode: 'contain',
  },
  bankDetails: {},
  bankLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
  bankValue: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    marginBottom: 5,
  },
  inputContainer: {
    height: 150,
    width: '100%',
    backgroundColor: 'rgba(250, 250, 250, 1)',
    borderRadius: 10,
    marginBottom: 20,
    position: 'relative',
  },
  input: {
    height: '100%',
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    color: 'black',
  },
  inputWithValue: {
    paddingTop: 45,
  },
  inputEmpty: {
    paddingTop: 0,
  },
  currencyLabel: {
    position: 'absolute',
    top: 30,
    width: '100%',
    textAlign: 'center',
    color: 'black',
    fontSize: 26,
    fontWeight: '500',
  },

  // Modal Styles (Drawer from bottom)
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContainer: {
    width: '100%',
    height: 360,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  // Circular Icon
  iconWrapper: {
    width: 80,
    height: 80,

    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -40,
    zIndex: 1,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'black',

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    width: 100,
    height: 1000,
    resizeMode: 'contain',
    marginTop: 6,
  },

  modalText: {
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
    marginBottom: 15,
    marginTop: 30,
  },

  dottedDivider: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(227, 227, 227, 1)', //background: rgba(255, 255, 255, 1);border: 1px solid var(--Neutrals-Neutrals100, rgba(227, 227, 227, 1))

    borderStyle: 'dotted',
    width: '100%',
    marginBottom: 15,
    marginTop: 15,
  },

  // Transfer Details
  transferDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 5,
  },
  transferLabel: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Outfit',
    color: '#888888', //background: var(--Neutrals-Neutrals500, #888888);
  },
  transferLabelHeading: {fontSize: 16, fontWeight: '500', color: 'black'},
  transferValue: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Outfit',
    color: '#5B5B5B', //background: var(--Neutrals-Neutrals700, #5B5B5B);
  },

  closeButton: {
    backgroundColor: '#409C59', //background: #409C59;

    paddingVertical: 8,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 10,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default SendMoney;
