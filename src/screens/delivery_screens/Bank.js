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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import backArrow from '../../asset/icons/greerArrowLeft.png';
import blackArrow from '../../asset/icons/blackArrow.png';
import Google from '../../asset/icons/Google.png';
import Apple from '../../asset/icons/Apple.png';
import bankIcon from '../../asset/citi.png';

const Bank = () => {
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
            activeOpacity={0.9}>
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
        <View style={styles.existingBanksContainer}>
          <Text style={styles.existingBanksText}>Wallet</Text>
        </View>
        <View style={[styles.bankInfoContainerlogo]}>
          <Image source={Google} style={styles.bankIconlogo} />
          <View style={styles.bankDetails}>
            <Text style={styles.bankValue}>Google Pay Wallet</Text>
          </View>
        </View>
        <View style={[styles.bankInfoContainerlogo]}>
          <Image source={Apple} style={styles.bankIconlogo} />
          <View style={styles.bankDetails}>
            <Text style={styles.bankValue}>Apple Pay Wallet</Text>
          </View>
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

        <TouchableOpacity
          style={styles.bankInfoContainer}
          onPress={() => navigation.navigate('AddBank')}>
          <View style={styles.bankDetails}>
            <Text style={styles.bankValue}>Add bank account</Text>
          </View>
          <Image source={blackArrow} style={styles.blackArrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bankInfoContainer}
          onPress={() => navigation.navigate('AdddebitCard')}>
          <View style={styles.bankDetails}>
            <Text style={styles.bankValue}>Add Debit/Credit Card</Text>
          </View>
          <Image source={blackArrow} style={styles.blackArrowIcon} />
        </TouchableOpacity>
      </ScrollView>
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
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // This will space out the items in the row
    marginBottom: 20,
  },
  backButton: {
    position: 'relative',
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
    textAlign: 'left',
    flex: 1,
    color: 'black',
    position: 'relative',
    left: 120,
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
});

export default Bank;
