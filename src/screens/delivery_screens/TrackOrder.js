import React,{useState} from 'react';
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
import map from '../../asset/mapDorp.png';
import profilePic from '../../asset/faces/Ellipse13.png';
import messageIcon from '../../asset/icons/messangeIcon.png';
import phoneIcon from '../../asset/icons/callIcon.png';
import star from '../../asset/icons/star.png';
import deliveryIcon from '../../asset/icons/deliveryloc.png';
import orderIcon from '../../asset/icons/orderId.png';
import pickupIcon from '../../asset/icons/pickuploc.png';
import note from '../../asset/note.png';
import Licence from '../../asset/SVG/Rectangle.png';
import red from '../../asset/icons/astreck.png';
import backArrow from '../../asset/icons/backArrow.png';

const {width, height} = Dimensions.get('window');

const FloatingLabelInput = ({label, value, onChangeText, onOpen}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.floatingLabelContainer}>
      <Text style={[styles.floatingLabel, {top: isFocused || value ? -2 : 19}]}>
        {label}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity>
          <Image source={Licence} style={styles.LicenceImage} />
        </TouchableOpacity>

        {/* The "Take" button */}
        <TouchableOpacity onPress={onOpen} style={styles.openButton}>
          <Text style={styles.openButtonText}>Take</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TrackOrder = () => {
  const navigation = useNavigation();
  const orderId = '#123456';
  const [uploadedLicense, setUploadedLicense] = useState('');

  // Function to navigate when the "Take" button is pressed
  const handleTakePress = () => {
    navigation.navigate('ScanfaceTake');
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
            <Image
              source={backArrow}
              style={{width: 16, height: 16}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.topText}>Drop</Text>
          <TouchableOpacity style={[styles.redbackButton, styles.shadow]}>
            <Image source={red} style={styles.backButtonImage} />
          </TouchableOpacity>
        </View>

        <Image source={map} style={styles.mapImage} />

        <View style={styles.profileContainer}>
          <View style={styles.profileLeft}>
            <Image source={profilePic} style={styles.profilePic} />
            <View style={styles.profileTextContainer}>
              <Text style={styles.profileName}>Daniel Loren</Text>
              <Text style={styles.profileIdentity}>Customer</Text>
              <View style={styles.ratingContainer}>
                {[...Array(5)].map((_, index) => (
                  <Image source={star} style={styles.starIcon} key={index} />
                ))}
              </View>
            </View>
          </View>
          <View style={styles.profileRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={messageIcon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={phoneIcon} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.locationContainer}>
          <View style={styles.locationRow}>
            <Image source={pickupIcon} style={styles.locationIcon} />
            <Text style={styles.locationText}>Pickup Location:</Text>
          </View>
          <Text style={styles.addressText}>12, Jodhpur Village, Ahmedabad</Text>
          <View style={styles.rectangleImage} />

          <View style={styles.locationRow}>
            <Image source={deliveryIcon} style={styles.locationIcon} />
            <Text style={styles.locationText}>Delivery Location:</Text>
          </View>
          <Text style={styles.addressText}>12, Jodhpur Village, Ahmedabad</Text>
        </View>

        <TouchableOpacity
          style={styles.rejectButton}
          onPress={() => navigation.navigate('RejectReason')}>
          <Text style={styles.buttonTextReject}>Track Order</Text>
        </TouchableOpacity>

        <View style={styles.orderIdContainer}>
          <View style={styles.orderRow}>
            <Image source={orderIcon} style={styles.orderIcon} />
            <Text style={styles.orderIdHeading}>Order ID</Text>
          </View>
          <Text style={styles.orderIdText}>{orderId}</Text>
        </View>

        <View style={styles.noteContainer}>
          <Image source={note} style={styles.noteImage} />
          <View style={styles.noteContent}>
            <Text style={styles.noteTitle}>Note</Text>
            <Text style={styles.noteText}>
              Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Text>
          </View>
        </View>

        <View style={{width: '100%'}}>
          <Text style={styles.consumerTitle}>
            Required Document by Consumer
          </Text>
          <FloatingLabelInput
            label="Face ID"
            value={uploadedLicense}
            onChangeText={setUploadedLicense}
            onOpen={handleTakePress} // Pass the navigation function here
          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CommonButton
          title="Drop"
          onPress={() => navigation.navigate('StoreNameSucuss')}
        />
      </View>
    </KeyboardAvoidingView>
  );
};


export default TrackOrder;

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
    fontFamily: 'Inter',
    color: 'rgba(51, 51, 51, 1)',
    // marginRight: 40,
    flex: 1,
    textAlign: 'center',
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  mapImage: {
    width: width * 0.85,
    height: height * 0.45,
    borderRadius: 30,
    marginBottom: 10,
  },
  locationContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  locationText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 10,
    color: 'rgba(51, 51, 51, 1)',
  },
  addressText: {
    fontSize: 14,
    fontFamily: 'Inter',
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '500',
    marginLeft: 30,
    marginBottom: 10,
  },
  rectangleImage: {
    width: 3,
    height: 32,
    backgroundColor: 'rgba(217, 217, 217, 1)',
    marginHorizontal: 7,
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    width: '100%',
  },
  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileTextContainer: {
    justifyContent: 'center',
  },
  profileIdentity: {
    fontSize: 10,
    color: 'rgba(79, 79, 79, 1)',
    fontWeight: '500',
    lineHeight: 12,
    fontFamily: 'Inter',
  },
  profileName: {
    fontSize: 15,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Inter',
    lineHeight: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  starIcon: {
    width: 10,
    height: 10,
  },

  orderIdContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: '100%',
  },
  orderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  orderIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  orderIdHeading: {
    fontSize: 10,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  orderIdText: {
    fontSize: 14,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '500',
    fontFamily: 'Inter',
    marginLeft: 30,
  },
  profileRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: -20,
  },
  iconButton: {
    // marginLeft: 1,
    width: 50,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: 'white', // Optional: to ensure icons stand out against background
  },
  icon: {
    width: 60, // Adjusted width to fit the icons properly
    height: 60, // Adjusted height for proper aspect ratio
    resizeMode: 'contain',
    marginTop: 10, // Ensures the icons scale appropriately
  },
  backButtonImage: {
    width: 24,
    height: 24,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#409C59',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redbackButton: {
    padding: 10,
    backgroundColor: '#D72F2F',
    borderRadius: 30,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    textAlign: 'center',
    fontSize: 18,
    width: width * 0.5,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',
    fontFamily: 'Inter',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  shadow: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  rejectButton: {
    width: '100%',
    height: 40,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#409C59',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonTextReject: {color: '#409C59', fontWeight: '700'},
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    padding: 10,
    width: '100%',
  },
  noteImage: {
    width: 24, // Adjust as needed
    height: 24, // Adjust as needed
    marginRight: 10,
  },
  noteContent: {
    flex: 1,
  },
  noteTitle: {
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Inter',
    color: 'rgba(51, 51, 51, 1)',
    marginBottom: 5,
  },
  noteText: {
    fontSize: 14,
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'Inter',
    fontWeight: '500',
  },
  consumerTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginRight: 35,
    marginLeft: -5,
    fontFamily: 'Inter',
    color: 'rgba(51, 51, 51, 1)',
    padding: 10,
    // marginVertical: 10,
  },
  floatingLabelContainer: {
    position: 'relative',
    marginVertical: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  floatingLabel: {
    position: 'absolute',
    marginTop: 5,
    left: 10,
    color: 'gray',
    fontSize: 12,
  },
  input: {
    flex: 1,
    height: 60,
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  openButton: {
    backgroundColor: '#409C59',
    paddingVertical: 10,
    paddingHorizontal: 33,
    borderRadius: 5,
    marginRight: 10,
    marginLeft: 10, // Space between input and button
  },
  openButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  LicenceImage: {
    width: 34,
    height: 36,
    borderRadius: 5,
  },
});
