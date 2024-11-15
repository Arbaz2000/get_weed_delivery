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
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import chatIcon from '../asset/icons/chat.png';
import dashboardIcon from '../asset/icons/dashboard.png';
import ordersIcon from '../asset/icons/orders.png';
import backbutton from '../asset/backbutton.png';

const {width} = Dimensions.get('window');

const Notification = () => {
  const navigation = useNavigation();

  // State to manage the animation for the flashing effect
  const [flashingIndex, setFlashingIndex] = useState(null);
  const [animation] = useState(new Animated.Value(0));

  const recentOrders = [
    {
      id: '12345',
      date: '01-10-2024',
      time: '10:30 AM',
      price: '$50',
      status: 'New Orders',
    },
    {
      id: '12346',
      date: '02-10-2024',
      time: '11:00 AM',
      price: '$75',
      status: 'Cancelled',
    },
    {
      id: '12347',
      date: '03-10-2024',
      time: '01:00 PM',
      price: '$100',
      status: 'Completed',
    },
    {
      id: '12348',
      date: '04-10-2024',
      time: '02:00 PM',
      price: '$60',
      status: 'New Orders',
    },
    {
      id: '12345',
      date: '01-10-2024',
      time: '10:30 AM',
      price: '$50',
      status: 'New Orders',
    },
    {
      id: '12346',
      date: '02-10-2024',
      time: '11:00 AM',
      price: '$75',
      status: 'Cancelled',
    },
    {
      id: '12347',
      date: '03-10-2024',
      time: '01:00 PM',
      price: '$100',
      status: 'Completed',
    },
    {
      id: '12348',
      date: '04-10-2024',
      time: '02:00 PM',
      price: '$60',
      status: 'New Orders',
    },
    {
      id: '12345',
      date: '01-10-2024',
      time: '10:30 AM',
      price: '$50',
      status: 'New Orders',
    },
    {
      id: '12346',
      date: '02-10-2024',
      time: '11:00 AM',
      price: '$75',
      status: 'Cancelled',
    },
    {
      id: '12347',
      date: '03-10-2024',
      time: '01:00 PM',
      price: '$100',
      status: 'Completed',
    },
    {
      id: '12348',
      date: '04-10-2024',
      time: '02:00 PM',
      price: '$60',
      status: 'New Orders',
    },
    {
      id: '12345',
      date: '01-10-2024',
      time: '10:30 AM',
      price: '$50',
      status: 'New Orders',
    },
    {
      id: '12346',
      date: '02-10-2024',
      time: '11:00 AM',
      price: '$75',
      status: 'Cancelled',
    },
    {
      id: '12347',
      date: '03-10-2024',
      time: '01:00 PM',
      price: '$100',
      status: 'Completed',
    },
    {
      id: '12348',
      date: '04-10-2024',
      time: '02:00 PM',
      price: '$60',
      status: 'New Orders',
    },
    {
      id: '12345',
      date: '01-10-2024',
      time: '10:30 AM',
      price: '$50',
      status: 'New Orders',
    },
    {
      id: '12346',
      date: '02-10-2024',
      time: '11:00 AM',
      price: '$75',
      status: 'Cancelled',
    },
    {
      id: '12347',
      date: '03-10-2024',
      time: '01:00 PM',
      price: '$100',
      status: 'Completed',
    },
    {
      id: '12348',
      date: '04-10-2024',
      time: '02:00 PM',
      price: '$60',
      status: 'New Orders',
    },
    // Add more orders as needed...
  ];

  // Handle item press and animate flashing green, border radius, and text color change
  const handlePress = index => {
    setFlashingIndex(index);

    // Animate the background color to green, border radius to 10, and text color to white
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1, // Flash green
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(animation, {
        toValue: 0, // Revert back to original color
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();

    // Optionally, navigate to another screen on press
    // navigation.navigate('OrderDetails', { orderId: recentOrders[index].id });
  };

  // Interpolate the background color, border radius, and text color
  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#fff', '#409C59'], // Flash green when pressedbackground: #409C59;
  });

  const borderRadius = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10], // Border radius changes to 10 during the flash
  });

  const textColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#000', '#fff'], // Text color changes to white during the flash
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.listContainer}>
          <View style={styles.backButtonContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <Image
                source={require('../asset/icons/greerArrowLeft.png')}
                style={styles.backButtonImage}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.listTitle}>Notification</Text>

          {recentOrders.map((order, index) => (
            <TouchableOpacity
              key={`${order.id}-${index}`}
              onPress={() => handlePress(index)}
              activeOpacity={0.7}>
              <Animated.View
                style={[
                  styles.listItem,
                  {
                    backgroundColor:
                      flashingIndex === index ? backgroundColor : '#fff',
                    borderRadius: flashingIndex === index ? borderRadius : 0,
                  },
                ]}>
                <Image source={ordersIcon} style={styles.listIcon} />
                <View style={styles.orderInfo}>
                  <View style={styles.orderIdContainer}>
                    <View style={styles.orderIdBadgeContainer}>
                      <Text
                        style={[
                          styles.orderId,
                          {
                            color: flashingIndex === index ? textColor : '#000', // Change text color to white when flashing
                          },
                        ]}>
                        Order ID: {order.id}
                      </Text>
                    </View>
                    <Text
                      style={[
                        styles.orderDate,
                        {
                          color: flashingIndex === index ? textColor : '#666', // Change text color for date
                        },
                      ]}>
                      {order.date} {order.time}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: 'rgba(79, 79, 79, 1)',
                      fontWeight: '400',
                      fontFamily: 'Inter',
                      fontSize: 12,
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </View>
              </Animated.View>
            </TouchableOpacity>
          ))}
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
  listContainer: {width: '100%', paddingHorizontal: 10},
  listTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  listIcon: {width: 24, height: 24, marginRight: 10},
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
  orderIdBadgeContainer: {flexDirection: 'row', alignItems: 'center'},
  orderDate: {
    fontSize: 10,
    textAlign: 'right',
    fontFamily: 'Mulish',
    fontWeight: '400',
    flex: 1,
  },
  orderId: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Mulish',
  },
  backButtonContainer: {
    position: 'absolute', // Set position to absolute
    top: -10, // Adjust this value as needed
    left: 10, // Adjust this value as needed
    zIndex: 1, // Ensure it's above other elements
  },
  backButton: {
    backgroundColor: 'white', // or any background color you prefer
    borderRadius: 10, // rounded corners (adjust as needed)
    padding: 10, // adjust padding for better appearance
    shadowColor: '#000', // shadow color for iOS
    shadowOffset: {width: 0, height: 2}, // shadow position for iOS
    shadowOpacity: 0.25, // shadow opacity for iOS
    shadowRadius: 3.5, // shadow spread for iOS
    elevation: 5, // shadow for Android
  },
  backButtonImage: {
    width: 24, // adjust based on your image size
    height: 24, // adjust based on your image size
  },
});

export default Notification;
