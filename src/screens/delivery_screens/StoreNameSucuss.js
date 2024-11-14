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
import CommonButton from '../../component/button';
import map from '../../asset/map.png';
import profilePic from '../../asset/faces/Ellipse13.png';
import profilePic1 from '../../asset/faces/Ellipse12.png';
import messageIcon from '../../asset/icons/messangeIcon.png';
import phoneIcon from '../../asset/icons/callIcon.png';
import star from '../../asset/icons/star.png';
import pickupIcon from '../../asset/icons/pickuploc.png';
import deliveryIcon from '../../asset/icons/deliveryloc.png';
import orderIcon from '../../asset/icons/orderId.png';
import backArrow from '../../asset/icons/backArrow.png';
import stock from '../../asset/stock.png';

const {width, height} = Dimensions.get('window');

const StoreNameSucuss = () => {
  const navigation = useNavigation();
  const orderId = '#123456';

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
            <Text style={{color: '#333333', fontFamily: 'Inter', fontSize: 12}}>
              Quantity: {product.wight}g
            </Text>
            <Text style={{color: '#333333', fontFamily: 'Inter', fontSize: 12}}>
              14 Jun 2023 at 2:50PM
            </Text>
            <Text style={styles.priceText}>${product.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

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
          <Text style={styles.title}>Store Name</Text>
        </View>

        <View style={styles.productList}>
          {products.map(renderProductTile)}
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileLeft}></View>
        </View>

        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Summary</Text>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Delivery fees</Text>
            <Text style={styles.summaryValue}>$2.00</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Tip</Text>
            <Text style={styles.summaryValue}>$1.00</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabelBold}>Total</Text>
            <Text style={styles.summaryValueBold}>$3.00</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.rejectButton}
            onPress={() => navigation.navigate('RejectReason')}>
            <Text style={styles.buttonTextReject}>Reject</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.acceptButton}
            onPress={() => navigation.navigate('BankDetails')}>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: '#409C59',
            fontFamily: 'Inter',
            marginHorizontal: 20,
            marginVertical: 20,
          }}>
          Want to enter bank deatials?
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default StoreNameSucuss;

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
    marginRight: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 22,
    gap: 20,
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
    marginTop: 5,
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
  backButton: {
    padding: 10,
    backgroundColor: '#409C59',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  productTile: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    height: 142,
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
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
    height: 120,
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
  summaryContainer: {
    marginTop: 20,
    padding: 10,
    width: '100%',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter',
    color: '#333333',
    marginBottom: 10,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  summaryLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#707070',
    fontFamily: 'Inter',
  },
  summaryValue: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Inter',
    color: '#707070',
  },
  summaryLabelBold: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter',
    color: '#333333',
  },
  summaryValueBold: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Inter',
    color: '#409C59',
  },
  rejectButton: {
    width: '52%',
    height: 50,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#409C59',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptButton: {
    width: '52%',
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
});
