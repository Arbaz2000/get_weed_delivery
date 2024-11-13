import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ToggleButton = ({ isInStock, onToggle }) => {
  return (
    <View
      style={[
        styles.toggleContainer,
        { backgroundColor: isInStock ? 'red' : '#409C59' },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.toggleButton,
          !isInStock ? styles.activeToggle : styles.inactiveToggle,
        ]}
        onPress={() => onToggle(false)}
      >
        <Text
          style={[
            styles.toggleButtonText,
            !isInStock ? styles.activeText : styles.inactiveText,
          ]}
        >
         Online
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          isInStock ? styles.activeToggleRed : styles.inactiveToggle,
        ]}
        onPress={() => onToggle(true)}
      >
        <Text
          style={[
            styles.toggleButtonText,
            isInStock ? styles.activeTextRed : styles.inactiveText,
          ]}
        >
          Offline
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    borderRadius: 30,
    // overflow: 'hidden',
    // marginHorizontal: 30,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 30,
  },
  activeToggle: {
    backgroundColor: '#409C59',
  },
  activeToggleRed: {
    backgroundColor: 'red',
  },
  inactiveToggle: {
    backgroundColor: 'transparent',
  },
  toggleButtonText: {
    fontWeight: '500',
  },
  activeText: {
    textAlign: 'center',
    color: 'rgba(64, 156, 89, 1)',
    backgroundColor: 'white',
    width: width * 0.37,
    borderRadius: 30,
    padding: 4,
  },
  activeTextRed: {
    textAlign: 'center',
    color: 'rgba(255, 54, 54, 1)',
    backgroundColor: 'white',
    width: width * 0.37,
    borderRadius: 30,
    padding: 4,
  },
  inactiveText: {
    textAlign: 'center',
    width: width * 0.35,
    color: 'white',
    borderRadius: 30,
    padding: 5,
  },
});

export default ToggleButton;
