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
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import stock from '../../asset/stock.png';
import backArrow from '../../asset/icons/backArrow.png';
import SearchBar from '../../component/SearchBar';

const {width} = Dimensions.get('window');

const NewOrder = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(products);

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

  const handleSearch = query => {
    setSearchQuery(query);
    const filtered = products.filter(
      item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        
        {/* <SearchBar placeholder="Search" onSearch={handleSearch} /> */}
        
        

        <View >
          {products.map(renderProductTile)}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewOrder;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  scrollContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 25,
    marginHorizontal: 10,
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
    backgroundColor: '#409C59',
    borderRadius: 10,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: 'bold',
    width: '70%',
    marginRight: 50,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
    marginTop: 10,
  },
  tabButton: {
    padding: 10,
    width: 110,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#EFEFEFEE',
    backgroundColor: 'white',
  },
  selectedButton: {
    backgroundColor: '#409C59',
  },
  selectedButtonText: {
    color: 'white',
  },
  tabButtonText: {
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '400',
    fontSize: 11,
    textAlign: 'center',
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
});
