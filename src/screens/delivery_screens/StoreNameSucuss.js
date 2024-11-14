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
import stock from '../../asset/stock.png';
import Amazing from '../../asset/AmazingDelivry.png';
import backArrow from '../../asset/icons/backArrow.png';
import Download from '../../asset/icons/solar_download-bold.png';
import CommonButton from '../../component/button';

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
      image: stock,
    },
    // Add more products as needed
  ];

  const renderProductTile = (product) => (
    <TouchableOpacity
      key={product.id}
      style={styles.productTile}
      onPress={() => navigation.navigate('Emergency')}>
      <View style={styles.badgeContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Delivered</Text>
        </View>
      </View>

      {/* Row for image and product info */}
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image source={product.image} style={styles.productImage} />
        </View>

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
            onPress={() => navigation.navigate('TabNavigator', {screen: 'Home'})}
            style={styles.backButton}
            activeOpacity={0.7}>
            <Image
              source={backArrow}
              style={styles.backButtonImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.title}>Store Name</Text>
        </View>
        <Image source={Amazing} style={styles.amazingImage} />

        <View style={styles.productList}>
          {products.map(renderProductTile)}
        </View>

        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Payment</Text>
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
        <View style={styles.invoiceButtonContainerb}>
          <TouchableOpacity style={styles.invoiceButton}>
            <Text style={styles.invoiceButtonText}>Download Invoice</Text>
            <Image source={Download} style={styles.downloadIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CommonButton
          title="Back to home"
          onPress={() => navigation.navigate('TabNavigator', {screen: 'Home'})}
        />
      </View>
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
    color: '#333',
    textAlign: 'center',
    flex: 1,
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
  backButtonImage: {
    width: 16,
    height: 16,
  },
  amazingImage: {
    width: '100%',
    height: '52%',
    marginTop:20,
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productTile: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    height: 142,
    borderWidth: 0.5,
    borderColor: '#CCCCCC',
    position: 'relative',
    marginTop:-80,
  },
  badgeContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
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
    marginHorizontal: 10,
    marginVertical: 10,
  },
  imageContainer: {
    width: 113,
    height: 120,
    borderRadius: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productInfo: {
    marginLeft: 15,
    justifyContent: 'center',
    flex: 1,
  },
  productSubtitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  productTitle: {
    fontSize: 12,
    fontWeight: '300',
    color: '#333',
  },
  addressTitle: {
    fontSize: 10,
    fontWeight: '300',
    color: '#333',
  },
  priceContainer: {
    marginTop: 10,
  },
  priceText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  summaryContainer: {
    marginTop: 20,
    padding: 10,
    width: '100%',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
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
  },
  summaryValue: {
    fontSize: 15,
    fontWeight: '400',
    color: '#707070',
  },
  summaryLabelBold: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  summaryValueBold: {
    fontSize: 18,
    fontWeight: '700',
    color: '#409C59',
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
    borderColor: '#409C59',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptButton: {
    width: '48%',
    height: 50,
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
  buttonTextReject: {
    color: '#409C59',
    fontWeight: '700',
    textAlign: 'center',
  },
  invoiceButtonContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },

  invoiceButton: {
    backgroundColor: '#409C59',
    width: '100%',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjusted to space out items
    alignItems: 'center', // Center items vertically
  },

  invoiceButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 20, // Maintain space between text and icon
  },

  downloadIcon: {
    width: 20,
    height: 20,
    marginRight: 20,
    marginLeft: 10, // Add margin to the left of the icon for additional spacing
  },
  buttonContainerd: {
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: 'center',
    marginHorizontal: 20,
  },
});
