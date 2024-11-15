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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BarChart} from 'react-native-chart-kit';
import DateInputField from '../../component/DateInputField';
import Accordion from '../../component/Accordion';
import ordersIcon from '../../asset/icons/earn.png';
import CommonButton from '../../component/button';

const {width, height} = Dimensions.get('window');

const EarningsDashboard = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [Cannabistype, setCannabistype] = useState(false);

  // Show and hide Date Picker
  const showDatePicker = () => setDatePickerVisible(true);
  const hideDatePicker = () => setDatePickerVisible(false);

  // Data for the bar chart
  const barChartData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{data: [20, 50, 30, 80, 60, 90, 110]}],
  };
  const recentOrders = [
    {
      id: '12345',
      date: '01-10-2024',
      time: '10:30 AM',
      price: '$50',
      status: 'Delivered', // Added status
      isNew: true,
    },
    {
      id: '12346',
      date: '02-10-2024',
      time: '11:00 AM',
      price: '$75',
      status: 'Requested Delivered', // Added status
      isNew: false,
    },
    {
      id: '12345',
      date: '01-10-2024',
      time: '10:30 AM',
      price: '$50',
      status: 'Delivered', // Added status
      isNew: true,
    },
    {
      id: '12346',
      date: '02-10-2024',
      time: '11:00 AM',
      price: '$75',
      status: 'Requested Delivered', // Added status
      isNew: false,
    },
    {
      id: '12345',
      date: '01-10-2024',
      time: '10:30 AM',
      price: '$50',
      status: 'Delivered', // Added status
      isNew: true,
    },
    {
      id: '12346',
      date: '02-10-2024',
      time: '11:00 AM',
      price: '$75',
      status: 'Requested Delivered', // Added status
      isNew: false,
    },
    {
      id: '12345',
      date: '01-10-2024',
      time: '10:30 AM',
      price: '$50',
      status: 'Delivered', // Added status
      isNew: true,
    },
    {
      id: '12346',
      date: '02-10-2024',
      time: '11:00 AM',
      price: '$75',
      status: 'Requested Delivered', // Added status
      isNew: false,
    },
    {
      id: '12345',
      date: '01-10-2024',
      time: '10:30 AM',
      price: '$50',
      status: 'Delivered', // Added status
      isNew: true,
    },
    {
      id: '12346',
      date: '02-10-2024',
      time: '11:00 AM',
      price: '$75',
      status: 'Requested Delivered', // Added status
      isNew: false,
    },
  ];

  // Function to handle navigation on button press
  const handleNavigation = screenName => {
    navigation.navigate(screenName);
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
            style={styles.backButton}>
            <Image
              source={require('../../asset/icons/greerArrowLeft.png')}
              style={styles.backButtonImage}
            />
          </TouchableOpacity>
          <Text style={styles.topText}>Earnings</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            style={styles.backButton}>
            <Image
              source={require('../../asset/icons/chatgreen.png')}
              style={styles.backButtonImage}
            />
          </TouchableOpacity>
        </View>

        {/* Green Card with Buttons */}
        <View style={styles.greenCardContainer}>
          <Text style={styles.greenCard}>Available Money</Text>
          <Text style={styles.greenCardHeading}>$21,345</Text>

          <View style={styles.rightTopIconContainer}>
            <Image
              source={require('../../asset/wallet.png')} // Add your large icon path here
              style={styles.largeIcon}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => handleNavigation('AddMoney')}>
              <Image
                source={require('../../asset/icons/add.png')} // Icon for Button 1
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Add Money</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => handleNavigation('WithdrawMoney')}>
              <Image
                source={require('../../asset/icons/addWallet.png')} // Icon for Button 2
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>withdrawal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => handleNavigation('SendMoney')}>
              <Image
                source={require('../../asset/icons/send.png')} // Icon for Button 3
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Send Money</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tileContainer}>
          {/* Bar Chart Tile */}
          <TouchableOpacity style={[styles.tile, styles.chartTile]}>
            <View style={styles.tileHeader}>
              <Text style={styles.tileTitle}>Earning</Text>

              {/* Wrapper for the Accordion to align it to the right */}
              <View style={{flex: 1, alignItems: 'flex-end',left:40}}>
                <Accordion
                  title="Weekly"
                  items={[{item: 'Daily'}, {item: 'Weekly'}, {item: 'Yearly'}]}
                  isOpen={Cannabistype}
                  toggle={() => setCannabistype(!Cannabistype)}
                  onSelect={item => console.log(item)} // Handle item selection if needed
                  noShift={true}
                  borderColor="#409C59"
                  width="60%"
                />
              </View>
            </View>

            <BarChart
              data={barChartData}
              width={width * 0.9}
              height={height * 0.35}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `#409C59`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, 0.7)`,
                style: {
                  borderRadius: 16,
                  backgroundColor: '#ffffff',
                },
                barPercentage: 0.7,
                propsForBackgroundLines: {
                  strokeDasharray: '',
                  stroke: '#e3e3e3',
                  strokeWidth: 1,
                },
                fillShadowGradientFrom: '#409C59',
                fillShadowGradientTo: '#409C59',
              }}
              withHorizontalLabels
              withVerticalLabels
              showBarTops={false}
              fromZero
              segments={2}
              verticalLabelRotation={0}
              style={[styles.chartStyle, {marginLeft: -20}]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Payment History</Text>
          {recentOrders.map(order => (
            <View key={order.id} style={styles.listItem}>
              <Image source={ordersIcon} style={styles.listIcon} />
              <View style={styles.orderInfo}>
                {/* Wrapper for Order ID and Status in the same row */}
                <View style={styles.orderStatusWrapper}>
                  {/* Order ID text */}
                  <Text style={styles.orderId}>Order ID: {order.id}</Text>

                  {/* Status text with dynamic background and rounded corners */}
                  <Text
                    style={[
                      styles.statusText,
                      order.status === 'Delivered'
                        ? styles.deliveredBackground
                        : order.status === 'Requested Delivered'
                        ? styles.requestedDeliveredBackground
                        : null, // No background for other statuses
                    ]}>
                    {order.status}
                  </Text>
                </View>

                {/* Date and Time */}
                <Text style={styles.orderDate}>
                  {order.date} {order.time}
                </Text>
              </View>

              {/* Order Price */}
              <Text style={styles.orderPrice}>{order.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainerBottom}>
        <CommonButton
          title="Save"
          onPress={() => navigation.navigate('Bank')}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default EarningsDashboard;

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
    marginBottom: 20,
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
  topText: {
    textAlign: 'center',
    fontSize: 18,
    width: width * 0.5,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '700',
    fontFamily: 'Inter',
  },
  greenCardContainer: {
    backgroundColor: '#409C59', // Green card background
    width: '90%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  greenCardHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 15,
  },
  greenCard: {
    fontSize: 15,
    fontWeight: '400',
    color: '#fff',
    marginBottom: 8,
  },
  rightTopIconContainer: {
    position: 'absolute',
    top: 15,
    right: 20,
    zIndex: 1,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  navButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: '30%',
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
  },
  buttonIcon: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  buttonText: {
    fontSize: width * 0.029,
    fontWeight: '700',
    color: '#409C59',
    fontFamily: 'Outfit',
  },
  tileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  tile: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: width * 0.45,
    height: 120,
    paddingVertical: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  chartTile: {
    height: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  tileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 8,
    marginTop:1,
    
    // marginHorizontal: 10,
    
    width:'100%'
  },
  tileTitle: {
    fontFamily: 'Inter',
    fontSize: 19,
    fontWeight: '500',
    color: '#2e2e30',
    textAlign: 'left',
    paddingLeft: 15,
  },
  chartStyle: {
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 16,
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'left', // Center the list container
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: 'rgba(51, 51, 51, 1)',
    paddingHorizontal: 10,
    fontFamily: 'Inter',
    textAlign: 'left', // Center the payment history title
  },
  listIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },

  // The actual text for Order ID

  orderDate: {
    fontSize: 12,
    color: 'rgba(79, 79, 79, 1)',
    fontFamily: 'Mulish',
    fontWeight: '400',
  },
  orderPrice: {
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'flex-end',
    flex: 1,
    textAlign: 'right',
    paddingBottom: 10,
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Mulish',
  },

  // Text color for the delivered status
  delivered: {
    color: 'white', // Status text color for delivered
  },

  // Text color for the requested delivered status
  requestedDelivered: {
    color: 'white', // Status text color for requested delivered
  },
  // Background colors for each status

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    width: '100%', // Ensures the list item takes full width
  },

  orderInfo: {
    flex: 1, // Make sure the order info section takes the remaining space
  },

  // The actual Order ID text
  orderId: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000', // Set color to black or whatever fits
    marginRight: 5, // Add some space between Order ID and Status
  },

  // The base status text
  statusText: {
    fontSize: 8,
    fontFamily: 'Mulish',
    fontWeight: '600',
    color: '#fff', // White text color on colored background
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 2, // Apply rounded corners to the status
    marginLeft: 5, // Space between Order ID and Status
  },
  // Background color for 'Delivered' status
  deliveredBackground: {
    backgroundColor: ' rgba(229, 208, 18, 1)', // Yellow background for Deliveredbackground:;background: rgba(229, 208, 18, 1);
  },

  // Background color for 'Requested Delivered' status
  requestedDeliveredBackground: {
    backgroundColor: '#409C59', // Green background for Requested Deliveredbackground:background: #409C59;
  },

  // Text color for the delivered status
  orderStatusWrapper: {
    flexDirection: 'row', // Align Order ID and Status in the same row
    alignItems: 'center', // Vertically center the content
  },
  buttonContainerBottom: {
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: 'center',
    marginHorizontal: 20,
  },
});
