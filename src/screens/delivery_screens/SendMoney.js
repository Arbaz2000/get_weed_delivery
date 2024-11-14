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
import CommonButton from '../../component/button';
import backArrow from '../../asset/icons/greerArrowLeft.png';
import blackArrow from '../../asset/icons/blackArrow.png';
import bankIcon from '../../asset/face.png';

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
        <CommonButton
          title="Send Money"
          onPress={() => navigation.navigate('Drop')}
        />
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
    // borderWidth: 1,
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
  // New styles for AmountInput
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
});

export default SendMoney;
