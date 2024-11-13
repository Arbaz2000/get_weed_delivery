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
import stock from '../asset/stock.png';
import backArrow from '../asset/icons/backArrow.png';
import ActiveOrder from '../screens/delivery_screens/ActiveOrder';
import NewOrder from '../screens/delivery_screens/NewOrder';
import Delivered from '../screens/delivery_screens/Delivered';
import SearchBar from '../component/SearchBar';

const {width} = Dimensions.get('window');

const Products = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('active'); // Default tab is 'active'
 const [searchQuery, setSearchQuery] = useState('');
 const [filteredData, setFilteredData] = useState(products);
  const products = [
    {
      id: 1,
      title: 'Product 1',
      subtitle: 'Description 1',
      wight: '110',
      price: 100,
      discountedPrice: 120,
      image: 'image_url_1',
      stockImage: stock, // Add stock image URL
    },
    // Add more products as needed
  ];

  // Function to render the correct component based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'new':
        return <NewOrder />;
      case 'active':
        return <ActiveOrder />;
      case 'delivered':
        return <Delivered />;
      default:
        return <NewOrder />;
    }
  };

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
          <Text style={styles.topText}>Order History</Text>
        </View>
        <SearchBar placeholder="Search" onSearch={handleSearch} />
        <View style={styles.buttonRow}>
          {['New Order', 'Active', 'Delivered'].map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.tabButton,
                activeTab === tab.toLowerCase() && styles.selectedButton,
              ]}
              onPress={() => setActiveTab(tab.toLowerCase())}>
              <Text
                style={[
                  styles.tabButtonText,
                  activeTab === tab.toLowerCase() && styles.selectedButtonText,
                ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Render the appropriate content based on the selected tab */}
        {renderTabContent()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Products;

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
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: 'bold',
    width: '100%',
    marginLeft: -20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    // marginVertical: 10,
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
});
