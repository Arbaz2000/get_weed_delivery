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
import chat from '../asset/icons/chat.png';
import dashboard from '../asset/icons/dashboard.png';
import earningsIcon from '../asset/icons/earnings.png';
import orderIcon from '../asset/icons/order.png';
import productsIcon from '../asset/icons/products.png';
import salesIcon from '../asset/icons/sales.png';
import DateInputField from '../component/DateInputField';
import ToggleButton from '../component/ToggleButton';
import stock from '../asset/stock.png';
import map from '../asset/SVG/map1.png';

const {width, height} = Dimensions.get('window');

const Dashboard = () => {
  const navigation = useNavigation();
  const [activeTile, setActiveTile] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [inStock, setInStock] = useState(false);

  // Show Date Picker
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  // Hide Date Picker
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  const products = [
    {
      id: 1,
      title: 'Product 1',
      subtitle: 'Description 1',
      wight: '110',
      price: 15,
      discountedPrice: 120,
      image: 'image_url_1',
      stockImage: stock, // Add stock image URL
    },
    // Add more products as needed
  ];

  const renderProductTile = product => (
    <TouchableOpacity
      key={product.id}
      style={styles.productTile}
      onPress={() => navigation.navigate('ProductInfo')}>
      {/* Badge positioned at the top-right of the entire tile */}
      <View style={styles.badgeContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>15 sec left</Text>
        </View>
      </View>

      {/* Row for image and product info */}
      <View style={styles.rowContainer}>
        {/* Image container */}
        <View style={styles.imageContainer}>
          <Image source={stock} style={styles.productImage} />
        </View>

        {/* Product info next to image */}
        <View style={styles.productInfo}>
          <Text style={styles.productSubtitle}>Walker Kush</Text>
          <Text style={styles.productTitle}>Hybrid</Text>
          <Text style={styles.addressTitle}>Jodhpur Village, Ahmedabad</Text>
          <View style={styles.priceContainer}>
            <Text>Quantity: {product.wight}g</Text>
            <Text>14 Jun 2023 at 2:50PM</Text>
            <Text style={styles.priceText}>${product.price}</Text>
          </View>
        </View>
      </View>

      {/* Divider between product info and action buttons */}
      <View style={styles.divider}></View>

      {/* Action buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.rejectButton}
          onPress={() => navigation.navigate('RejectReason')}>
          <Text style={styles.buttonTextReject}>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.acceptButton}
          onPress={() => navigation.navigate('StoreName')}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  const tilesData = [
    {icon: earningsIcon, title: 'Total Earnings', data: '$14500.96'},
    {icon: orderIcon, title: 'Completed Orders', data: '150'},
    {icon: productsIcon, title: 'Pending Order', data: '253'},
    {icon: salesIcon, title: 'Cancelled Order', data: '110'},
  ];

 
  const handleToggle = status => {
    setInStock(status);
  };
  // Data for the bar chart
  const barChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [20, 50, 30, 80, 60, 90, 110],
      },
    ],
  };
const handleTilePress = index => {
  setActiveTile(index); // Set active tile index
  setTimeout(() => setActiveTile(null), 300); // Reset after a short delay (300ms)

  // Navigate to different screens based on the clicked tile
  switch (index) {
    case 0: // Total Earnings Tile
      navigation.navigate('EarningsDashboard');
      break;
    case 1: // Completed Orders Tile
      navigation.navigate('CompletedOrders');
      break;
    case 2: // Pending Order Tile
      navigation.navigate('PendingOrders');
      break;
    case 3: // Cancelled Order Tile
      navigation.navigate('CancelledOrders');
      break;
    default:
      break;
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
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.backButton, styles.shadow]}>
            <Image source={dashboard} style={styles.backButtonImage} />
          </TouchableOpacity>
          <Text style={styles.topText}>Dashboard</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            style={[styles.backButton, styles.shadow]}>
            <Image source={chat} style={styles.backButtonImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.tileContainer}>
          {tilesData.map((tile, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.tile,
                activeTile === index && {backgroundColor: '#409c59'}, // Flash green on press
              ]}
              onPress={() => handleTilePress(index)} // Trigger press effect
            >
              <View style={styles.tileHeader}>
                <Image source={tile.icon} style={styles.tileIcon} />
                <Text
                  style={[
                    styles.tileTitle,
                    activeTile === index && {color: '#fff'}, // Change title text to white
                  ]}>
                  {tile.title}
                </Text>
              </View>
              <Text
                style={[
                  styles.tileData,
                  activeTile === index && {color: '#fff'}, // Change data text to white
                ]}>
                {tile.data}
              </Text>
            </TouchableOpacity>
          ))}

          {/* Bar Chart Tile */}
          <TouchableOpacity style={[styles.tilechart, styles.chartTile]}>
            <View style={styles.tileHeader}>
              <Text style={[styles.tileTitleC, {flex: 1}]}>Orders</Text>
              <DateInputField
                label="Select Date"
                value={selectedDate}
                onDateChange={setSelectedDate} // Pass the function to update the date
                isDatePickerVisible={isDatePickerVisible}
                showDatePicker={showDatePicker}
                hideDatePicker={hideDatePicker}
                borderColorSelect="green"
                borderWidthSelect="47%"
                paddingSelect={10}
              />
            </View>
            <BarChart
              data={barChartData}
              width={width * 0.9} // Adjust width to fit in the tile
              height={180} // Adjust height as needed
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, 0.7)`,
                style: {
                  borderRadius: 16,
                  backgroundColor: '#ffffff',
                },
                barPercentage: 0.7, // Adjust bar width as needed
                propsForBackgroundLines: {
                  strokeDasharray: '',
                  stroke: '#e3e3e3',
                  strokeWidth: 1,
                },
                fillShadowGradientFrom: '#ff6384',
                fillShadowGradientFromOpacity: 1,
                fillShadowGradientTo: '#ff6384',
                fillShadowGradientToOpacity: 1,
              }}
              withHorizontalLabels={true}
              withVerticalLabels={true}
              segments={2}
              showBarTops={false}
              fromZero={true}
              style={[styles.chartStyle, {marginLeft: -20}]} // Apply negative margin to shift chart left
              verticalLabelRotation={0} // Keep labels horizontal
              xAxisLabelStyle={{
                fontSize: 10,
                fontWeight: 'bold',
                textOverflow: 'ellipsis',
                maxWidth: 60,
                whiteSpace: 'nowrap',
              }}
              // Curved bars using propsForBars
              propsForBars={{
                borderRadius: 16, // Make the bar edges rounded
                fillColor: 'rgba(0, 0, 0, 0.8)', // Bar color, you can adjust this
              }}
            />
          </TouchableOpacity>
          <ToggleButton isInStock={inStock} onToggle={handleToggle} />
          <Image source={map} style={styles.mapImage} />
          <View>
            <Text
              style={{
                fontFamily: 'Inter',
                fontSize: 19,
                fontWeight: '500',
                marginTop: 20,
                marginBottom: 20,
                color: 'black',
              }}>
              New Order
            </Text>
            <View>{products.map(renderProductTile)}</View>
          </View>
          {/* Conditionally Render Products */}
          {inStock && <Image source={map} style={styles.mapImage} />}

          {/* Map - Always visible */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Dashboard;

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
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  shadow: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  backButtonImage: {
    width: 24,
    height: 24,
  },
  topText: {
    textAlign: 'center',
    fontSize: 18,
    width: width * 0.5,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',
    fontFamily: 'Inter',
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

  tilechart: {
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
    elevation: 2,
    justifyContent: 'center',
    paddingLeft: 10,
    marginTop: 30,
  },

  chartTile: {
    height: 340, // Adjust to give enough space for the chart
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
  },

  tileIcon: {
    width: 35,
    height: 35,
    marginRight: 3,
  },

  tileTitle: {
    fontFamily: 'Mulish',
    fontSize: 14,
    fontWeight: '600',
    color: '#333333', // Default color for title
    textAlign: 'left',
  },

  tileTitleC: {
    fontFamily: 'Inter',
    fontSize: 19,
    fontWeight: '500',
    color: '#2e2e30', // Default color for title
    textAlign: 'left',
    paddingLeft: 15,
  },

  tileData: {
    fontFamily: 'Mulish',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 36,
    letterSpacing: 1,
    color: '#333333', // Default color for data
    textAlign: 'left',
    paddingLeft: 4,
  },

  chartStyle: {
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 16,
  },
  productTile: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    height: '100%',
    borderWidth: 0.5,
    borderColor: '#CCCCCC',
    position: 'relative', // To position the badge absolutely within the tile
  },
  badgeContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1, // Ensure badge is above the content
  },
  badge: {
    backgroundColor: '#409C59',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align the image and product info vertically
    marginHorizontal: 10,
    marginVertical: 10,
  },
  imageContainer: {
    width: 113,
    height: 130,
    borderRadius: 10,
    overflow: 'hidden', // Ensure the image is clipped to rounded corners
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productInfo: {
    marginLeft: 15, // Space between image and product info
    justifyContent: 'center', // Align text vertically in the container
    flex: 1, // Ensure it takes up the remaining space
  },
  productTitle: {
    fontSize: 12,
    fontWeight: '300',
    color: '#333333', //background: #333333;
  },
  addressTitle: {
    fontSize: 10,
    fontWeight: '300',
    color: '#333333',
  },
  productSubtitle: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
  },
  priceContainer: {
    marginTop: 10,
  },
  priceText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    marginTop: 5,
  },
  discountedPriceText: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 1)',
    // textDecorationLine: 'line-through',
    // marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 22,
  },
  rejectButton: {
    width: '48%',
    height: 50,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(64, 156, 89, 1)',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptButton: {
    width: '48%',
    height: 48,
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#409C59',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonTextReject: {color: '#409C59', fontWeight: '700'},
  divider: {
    marginTop: 10,
    marginBottom: 10,
    width: '95%', // Set the width to 70% of the container
    height: 1, // Divider height
    backgroundColor: '#D3D3D3', // Divider color (light gray)
    // marginVertical: 10, // Space above and below the divider
    alignSelf: 'center', // Center the divider horizontally
  },
  mapImage: {
    width: '100%',
    height: height * 0.45,
    borderRadius: 30,
    marginBottom: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    alignSelf: 'center', // Ensures the mapImage is centered horizontally
    justifyContent: 'center', // Center content inside mapImage
    alignItems: 'center', // Center content inside mapImage
  },
});
