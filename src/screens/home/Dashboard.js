import React, { useState } from 'react';
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
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarChart } from 'react-native-chart-kit';
import chat from '../../asset/icons/ChatG.png';
import dashboard from '../../asset/icons/DashBack.png';
import earningsIcon from '../../asset/SVG/earn.png';
import orderIcon from '../../asset/SVG/order.png';
import productsIcon from '../../asset/SVG/box.png';
import salesIcon from '../../asset/SVG/cancel.png';
import DateInputField from '../../component/DateInputField';
import ToggleButton from '../../component/ToggleButton';
import stock from '../../asset/SVG/productImg.png';
import mapb from '../../asset/mapb.png';
import map from '../../asset/SVG/map1.png';
import SearchBar from '../../component/SearchBar';

import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');

const Dashboard = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
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
      onPress={() => navigation.navigate('StoreName')}>
      {/* Badge positioned at the top-right of the entire tile */}
      <View style={styles.badgeContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{t('sec')}</Text>
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
          <Text style={styles.productSubtitle}>{t('walker_kush')}</Text>
          <Text style={styles.productTitle}>{t('hybrid')}</Text>
          <Text style={styles.addressTitle}>{t('jodhpur_village')}, {t('ahmedabad')}</Text>
          <View style={styles.priceContainer}>
            <Text style={{ color: '#333333', fontFamily: 'Inter', fontSize: 12  ,   textAlign: Platform.OS === 'ios' ? 'left' : 'left',
}}>
              {t('quantity')}: {product.wight}g
            </Text>
            <Text style={{ color: '#333333', fontFamily: 'Inter', fontSize: 12 }}>
              14 Jun 2023 at 2:50PM
            </Text>
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
        >
          <Text style={styles.buttonTextReject}>{t('order_rejected')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.acceptButton}
          onPress={() => navigation.navigate('BankDetails')}>
          <Text style={styles.buttonText}>{t('order_accepted')}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  const tilesData = [
    { icon: earningsIcon, title: t('totalearnings'), data: '$14500.96' },
    { icon: orderIcon, title: t('completed_orders'), data: '150' },
    { icon: productsIcon, title: t('pending'), data: '253' },
    { icon: salesIcon, title: t('cancelled_order'), data: '110' },
  ];


  const handleToggle = status => {
    setInStock(status);
  };
  // Data for the bar chart
  const barChartData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        data: [20, 50, 30, 50, 60, 20, 10],
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
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <View style={styles.headerContainer}>
            <TouchableOpacity style={[styles.backButton, styles.shadow]}>
              <Image source={dashboard} style={styles.backButtonImage} />
            </TouchableOpacity>
            <Text style={styles.topText}>{t('dashboard')}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Chat')}
              style={[styles.backButton, styles.shadow]}>
              <Image source={chat} style={styles.backButtonImage} />
            </TouchableOpacity>
          </View>
          <SearchBar />
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
                <Text style={[styles.tileTitleC, {flex: 1}]}>{t('order')}</Text>
                <DateInputField
                  label={t('select_date')}
                  value={selectedDate}
                  onDateChange={setSelectedDate} // Pass the function to update the date
                  isDatePickerVisible={isDatePickerVisible}
                  showDatePicker={showDatePicker}
                  hideDatePicker={hideDatePicker}
                  borderColorSelect="green"
                  borderWidthSelect="38%"
                  paddingSelect={10}
                />
              </View>
              <BarChart
                data={barChartData}
                width={width * 0.9} // Adjust width to fit in the tile
                height={190} // Adjust height as needed
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
                  fillShadowGradientFrom: '#409C59',
                  fillShadowGradientFromOpacity: 1,
                  fillShadowGradientTo: '#409C59',
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
            {!inStock && (
              <>
                <Image source={mapb} style={styles.mapImage} />
                <View>
                  <Text
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 19,
                      fontWeight: '500',
                      marginTop: 20,
                      marginBottom: 20,
                      color: 'black',
                      textAlign: Platform.OS === 'ios' ? 'left' : 'left',
                    }}>
                    {t('new_orders')}
                  </Text>
                  <View>{products.map(renderProductTile)}</View>
                </View>
              </>
            )}

            {inStock && <Image source={map} style={styles.mapImage} />}
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
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
    shadowOffset: { width: 0, height: 4 },
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
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 2,
    justifyContent: 'center',
    paddingLeft: 10,
    marginTop: 30,
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
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  chartTile: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  tileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginTop: 10,
    // marginBottom: 8,
  },

  tileIcon: {
    width: 24,
    height: 24,
    marginRight: 7,
  },

  tileTitle: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    color: '#7C7C7C', // Default color for title
    textAlign: 'left',
    width: '80%',
  },

  tileTitleC: {
    fontFamily: 'Inter',
    fontSize: 19,
    fontWeight: '500',
    color: '#2e2e30', // Default color for title
    textAlign: 'left',
    paddingLeft: 15,
    width: "100%",
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
    height:"auto",
    
    position: 'relative', // To position the badge absolutely within the tile
    shadowColor: 'black', // shadow color for iOS
    shadowOffset: {width: 5, height: 2}, // shadow position for iOS
    shadowOpacity: 0.25, // shadow opacity for iOS
    shadowRadius: 3.5, // shadow spread for iOS
    elevation: 5, // shadow effect for Android
    marginLeft: 5,
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
    fontSize: 11,
    fontWeight: '500',
    color: '#333333', //background: #333333;
    fontFamily: 'Inter',
    textAlign: Platform.OS === 'ios' ? 'left' : 'left',

  },
  addressTitle: {
    fontSize: 10,
    fontWeight: '500',
    color: '#333333',
    fontFamily: 'Inter',
    textAlign: Platform.OS === 'ios' ? 'left' : 'left',

  },
  productSubtitle: {
    fontSize: 13,
    color: '#333333',
    fontWeight: '700',
    textAlign: Platform.OS === 'ios' ? 'left' : 'left',

  },
  priceContainer: {
    marginTop: 10,
    color: 'black',
  },
  priceText: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '700',
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
    marginBottom:30,
    marginHorizontal: 22,
  },
  rejectButton: {
    width: '48%',
    height: 40,
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
    height: 40,
    // padding: 14,
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
  buttonTextReject: { color: '#409C59', fontWeight: '700' },
  divider: {
    marginTop: 10,
    marginBottom: 10,
    width: '95%',
    height: 1,
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
  },
  mapImage: {
    width: '100%',
    height: height * 0.45,
    borderRadius: 30,
    marginBottom: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
