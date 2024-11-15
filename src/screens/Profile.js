import React from 'react';
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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Import icons
import chat from '../asset/icons/chat.png';
import dashboard from '../asset/icons/dashboard.png';
import editIcon from '../asset/icons/Edit1.png';
import Truck from '../asset/icons/TruckG.png';
import bell from '../asset/icons/Notification.png';
import earningsIcon from '../asset/SVG/earn.png';
import privacyIcon from '../asset/SVG/privacy.png';
import supportIcon from '../asset/SVG/customer.png';
import greenArrow from '../asset/icons/greenArrow.png';
import logoutIcon from '../asset/SVG/logout.png';
import Ellipse12 from '../asset/faces/Ellipse13.png';

const {width, height} = Dimensions.get('window');

const Profile = () => {
  const navigation = useNavigation();

  const menuItems = [
    {
      label: 'Edit Profile',
      icon: editIcon,
      route: 'EditUserProfile',
      EditIcon: true,
    },
    {label: 'Vehicle', icon: Truck, route: 'ProfileVehicle', truckIcon: true}, // Resize truck icon
    {label: 'Notifications', icon: bell, route: 'Notification', bellIcon: true}, // Resize bell icon
    {label: 'Earnings', icon: earningsIcon, route: 'EarningsDashboard'},
    {
      label: 'Privacy Policy',
      icon: privacyIcon,
      route: 'PrivacyPolicy',
      PrivacyIcon: true,
    },
    {
      label: 'Customer Support & FAQ',
      icon: supportIcon,
      route: 'ContactUsForm',
    },
    {label: 'Logout', icon: logoutIcon, route: 'TabNavigator'},
  ];

  const handlePress = route => {
    if (route === 'Logout') {
      console.log('Logging out...');
    } else {
      navigation.navigate(route);
    }
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
          <Text style={styles.profileLabel}>Profile</Text>
          <Image source={Ellipse12} style={styles.profileImage} />
          <Text style={styles.profileName}>Your Name</Text>
          <Text style={styles.profileEmail}>email@example.com</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => handlePress(item.route)}>
              <Image
                source={item.icon}
                style={[
                  styles.menuIcon,
                  item.truckIcon && styles.truckIcon, // Apply truck icon size
                  item.bellIcon && styles.bellIcon,
                  item.EditIcon && styles.EditIcon, // Apply truck icon size
                  item.PrivacyIcon && styles.PrivacyIcon, // Apply bell icon size
                ]}
              />
              <Text style={styles.menuText}>{item.label}</Text>
              <Image source={greenArrow} style={styles.arrowIcon} />
            </TouchableOpacity>
          ))}
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
    height: height * 0.35,
    backgroundColor: '#409C59',
    borderBottomLeftRadius: width / 2,
    borderBottomRightRadius: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    marginTop: -40,
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
  menuContainer: {
    width: '85%',
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 18,
  },
  truckIcon: {
    width: 26, // Set truck icon size
    height: 20,
  },
  bellIcon: {
    width: 18, // Set bell icon size
    height: 24,
    marginRight: 25,
  },
  EditIcon: {
    width: 18, // Set truck icon size
    height: 18,
  },
  PrivacyIcon: {
    width: 21, // Set truck icon size
    height: 26,
  },
  menuText: {
    fontSize: 18,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',
    fontFamily: 'Lato',
    flex: 1,
  },
  arrowIcon: {
    width: 10,
    height: 16,
  },
});

export default Profile;
