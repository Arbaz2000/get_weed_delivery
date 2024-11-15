import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import logo from '../asset/logo.png';
import Apple from '../asset/SVG/Apple'; // Import SVG components
import Phone from '../asset/SVG/Call';
import Email from '../asset/SVG/Email';
import Facebook from '../asset/SVG/Facebook';
import Google from '../asset/SVG/Google';
import GetstartwithFace from '../asset/SVG/ScanFace';
import tri from '../asset/tri.png';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        {/* Conditionally render the correct SVG icon */}
        {title === 'Get Started with Google' && <Google />}
        {title === 'Get Started with Email' && <Email />}
        {title === 'Get Started with Apple' && <Apple />}
        {title === 'Get Started with Facebook' && <Facebook />}
        {title === 'Get Started with Face' && <GetstartwithFace />}
        <View style={styles.textContainer}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


const GreenButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.greenButton} onPress={onPress}>
      <Text style={styles.greenButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const ConnectWithPhone = () => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [placeholderTop] = useState(new Animated.Value(20)); // to animate the placeholder

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        // Handle the keyboard showing, if needed
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        // Handle the keyboard hiding, if needed
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  // Handle focus change
  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(placeholderTop, {
      toValue: 0, // Moves placeholder up when focused
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  // Handle blur change
  const handleBlur = () => {
    if (!phoneNumber) {
      setIsFocused(false);
      Animated.timing(placeholderTop, {
        toValue: 20, // Moves placeholder back down if not filled
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  // Handle text input change
  const handleChange = text => {
    setPhoneNumber(text);
    if (text) {
      if (!isFocused) {
        setIsFocused(true);
        Animated.timing(placeholderTop, {
          toValue: -20,
          duration: 200,
          useNativeDriver: false,
        }).start();
      }
    } else {
      if (isFocused) {
        setIsFocused(false);
        Animated.timing(placeholderTop, {
          toValue: 20,
          duration: 200,
          useNativeDriver: false,
        }).start();
      }
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
        <View style={styles.topSection}>
          <View style={styles.touchable}>
            <View style={{width: '100%', alignItems: 'flex-start'}}>
              <Text style={styles.boldText}>Let's Start!</Text>
              <Text style={styles.subText}>
                Welcome, Please Enter Your Details!
              </Text>
            </View>
          </View>
          <Image source={logo} style={styles.logo} />
        </View>

        <View style={styles.inputContainer}>
  <Image source={tri} style={styles.triangleIcon} />
  
  {/* Vertical Divider */}
  <View style={styles.divider} />
  
  <Animated.Text
    style={[
      styles.placeholder,
      {
        top: placeholderTop,
        fontSize: isFocused || phoneNumber ? 12 : 16,
        left: 100, // Move the placeholder more to the right
      },
    ]}
  >
    Mobile Number
  </Animated.Text>
  
  <TextInput
    style={styles.input}
    keyboardType="phone-pad"
    maxLength={10}
    onFocus={handleFocus}
    onBlur={handleBlur}
    onChangeText={handleChange}
    value={phoneNumber}
  />
</View>


        <View style={styles.containerText}>
          <Text
            style={[
              styles.bottomTextHelp,
              {flex: 1, textAlign: 'left', paddingLeft: 12},
            ]}>
            Recovery account?
          </Text>
          <Text
            style={[
              styles.bottomTextHelp,
              {flex: 1, textAlign: 'right', paddingRight: 12},
            ]}>
            Need Help?
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <GreenButton
            title="Next"
            onPress={() => navigation.navigate('OtpSplash')}
          />
          <View style={styles.separatorContainer}>
            <View style={styles.separator} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.separator} />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton title="Get Started with Google" onPress={() => {}} />
          <CustomButton title="Get Started with Facebook" onPress={() => {}} />
          <CustomButton title="Get Started with Apple" onPress={() => {}} />
          <CustomButton
            title="Get Started with Email"
            onPress={() => navigation.navigate('ConnectWithEmail')}
          />
          <CustomButton
            title="Get Started with Face"
            onPress={() => navigation.navigate('ScanFace')}
          />
        </View>

        <Text style={styles.subsubText}>
          By continuing you agree to our{'\n'}Terms of use and privacy
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ConnectWithPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bottomText: {
    fontSize: 10,
    color: 'rgba(64, 156, 89, 1)',
    paddingBottom: 5,
    fontFamily: 'Inter',
  },
  bottomTextHelp: {
    fontSize: 10,
    color: '#409C59',
    paddingBottom: 5,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  touchable: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
    alignItems: 'flex-start',
    marginLeft: 60,
  },

  logo: {
    width: 70,
    height: 70,
    marginRight: 10,
    marginTop: 40,
  },
  boldText: {
    fontSize: 24,
    color: '#333333',
    fontWeight: '700',
    fontFamily: 'Inter',
  },
  subText: {
    fontSize: 15,
    color: '#333333',
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  subsubText: {
    fontSize: 10,
    color: '#333333',
    paddingBottom: 20,
    textAlign: 'center',
    fontFamily:'Inter',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.85,
    height: 60,
    borderWidth: 1,
    borderColor: '#409C59',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
    position: 'relative',
  },
  triangleIcon: {
    width: 80,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: '#000',
  },
  placeholder: {
    position: 'absolute',
    left: 10,
    color: '#409C59', // Green color for the placeholder
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  buttonContainer: {
    paddingTop: 5,
    width: width * 0.85,
    paddingBottom: 30,
  },
  button: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    borderWidth: 0.5,
    justifyContent: 'center',
    borderColor: 'lightgrey',
    alignItems: 'center',
    marginVertical: 8,
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
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 60,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: -20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333333',
    fontFamily:'Inter',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  orText: {
    paddingHorizontal: 10,
    fontSize: 10,
    color: '#409C59',
    fontFamily:'Roboto',
  },  
  divider: {
    width: 1.2,            // Divider width
    height: '100%',      // Divider height to match the input container
    backgroundColor: '#409C59', // Divider color, adjust as needed
    marginLeft: -7, // Space between the icon and divider
  },
});
