import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Import the Feather icon library (or choose another icon set)

const SearchBar = ({placeholder = 'Search...', onSearch}) => {
  const [query, setQuery] = useState('');

  const handleChangeText = text => {
    setQuery(text);
    if (onSearch) {
      onSearch(text); // Call the onSearch callback to send the query upwards
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) {
      onSearch(''); // Trigger search with an empty query when clearing
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Icon */}
      <Icon name="search" size={20} color="#A9A9A9" style={styles.icon} />

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={query}
        onChangeText={handleChangeText}
        placeholderTextColor="#A9A9A9"
      />

      {query.length > 0 && (
        <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
          <Text style={styles.clearText}>X</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 12,
    margin: 8,
    paddingVertical: 3,

    // Shadow styles for iOS
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 4}, // Offset the shadow
    shadowOpacity: 0.1, // Transparency of the shadow
    shadowRadius: 10, // Blur radius of the shadow

    // Elevation for Android
    elevation: 4, // Elevation for Android (shadow effect)
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 13,
    fontWeight:'bold',
    color: '#929292',
  },
  clearButton: {
    padding: 4,
    marginLeft: 8,
  },
  clearText: {
    fontSize: 18,
    color: '#929292',
  },
});

export default SearchBar;
