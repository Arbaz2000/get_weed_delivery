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
import chatIcon from '../asset/icons/chat.png';
import backArrow from '../asset/icons/backArrow.png';
import f1 from '../asset/faces/Ellipse1.png'; // Example icon
import f2 from '../asset/faces/Ellipse2.png'; // Additional example icon
import f3 from '../asset/faces/Ellipse3.png';
import f4 from '../asset/faces/Ellipse4.png';
import f5 from '../asset/faces/Ellipse5.png';
import f6 from '../asset/faces/Ellipse6.png';
import f7 from '../asset/faces/Ellipse7.png';
import f8 from '../asset/faces/Ellipse8.png';
import f9 from '../asset/faces/Ellipse9.png';
import f10 from '../asset/faces/Ellipse10.png';
import f11 from '../asset/faces/Ellipse11.png';
import f12 from '../asset/faces/Ellipse12.png';
import WhiteArrowSVG from '../asset/SVG/WhiteArrow';

const {width} = Dimensions.get('window');

// Array of random images
const orderImages = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12];

// Function to get a random image
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * orderImages.length);
  return orderImages[randomIndex];
};

// Function to get a random name from an array of names
const getRandomName = () => {
  const names = [
    'Customer Name',
    'Shop Owner Name',
    'Customer Name',
    'Shop Owner Name',
    'Customer Name',
    'Shop Owner Name',
    'Customer Name',
    'Shop Owner Name',
    'Customer Name',
    'Shop Owner Name',
    'Customer Name',
    'Shop Owner Name',
  ];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

// Updated recentOrders with random customer and shop owner names
const Chat = () => {
  const navigation = useNavigation();

  const recentOrders = [
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      image: getRandomImage(), // Assign a random image
      customerName: getRandomName(),
      shopOwnerName: getRandomName(),
    },
    // Add more orders as needed...
  ];

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
        </View>

        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Chats</Text>
          {recentOrders.map((order, index) => {
            // Alternate between shop owner and customer messages
            const isShopOwnerTurn = index % 2 === 0;
            return (
              <View key={`${order.id}-${index}`} style={styles.listItem}>
                <Image source={order.image} style={styles.buttonImage} />
                <View style={styles.orderInfo}>
                  <View style={styles.orderIdContainer}>
                    <Text style={styles.orderId}>
                      {isShopOwnerTurn
                        ? order.shopOwnerName
                        : order.customerName}
                    </Text>
                    <Text style={styles.orderDate}>{order.time}</Text>
                  </View>
                  <Text style={styles.orderMessage}>
                    {isShopOwnerTurn ? 'Where are you?' : 'Where are you?'}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: -20,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#409C59',
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 6,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {width: 45, height: 45, marginRight: 10},
  listContainer: {width: '100%', paddingHorizontal: 10},
  listTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 30,
    marginTop: -10,
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  orderInfo: {flex: 1},
  orderIdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    width: '100%',
  },
  orderDate: {
    fontSize: 11,
    color: 'rgba(151, 151, 151, 1)',
    textAlign: 'right',
    fontFamily: 'Inter',
    fontWeight: '600',
    flex: 1,
    marginRight: 20,
  },
  orderId: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Inter',
  },
  orderMessage: {
    color: 'rgba(151, 151, 151, 1)',
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 11,
  },
});

export default Chat;
