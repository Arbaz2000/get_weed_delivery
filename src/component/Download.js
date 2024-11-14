import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FloatingLabelInput from '../component/TextInput'; // Assuming you have a floating label input component

const Download = ({
  label,
  value,
  onDateChange,
  borderColorSelect,
  borderWidthSelect,
  paddingSelect,
}) => {
  // Handler for when the user touches the container
  const handleTouch = () => {
    console.log('Download component touched!'); // Log message when touched
  };

  // Handler when the calendar button is pressed
  const handlePress = () => {
    console.log('Current Date:', new Date().toDateString());
  };

  return (
    <View
      style={[
        styles.container,
        borderWidthSelect && {width: borderWidthSelect},
        paddingSelect && {paddingRight: paddingSelect},
      ]}
      onTouchStart={handleTouch} // Detect touch event and log message
    >
      <FloatingLabelInput
        label={label}
        value={value ? value.toDateString() : ''} // Show the selected date
        editable={false} // Make the input uneditable directly
        style={[
          styles.input,
          borderColorSelect && {borderColor: borderColorSelect},
        ]} // Apply custom style to the input
      />
      <TouchableOpacity
        style={styles.iconButton}
        onPress={handlePress} // Log the date when button is pressed
      >
        <Image
          source={require('../asset/icons/download.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%', // Make it take the full width of its container
  },
  input: {
    width: '100%', // Make input field wider
    borderWidth: 1, // Border width
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10, // Optional: Adds rounded corners to the border
    color: 'black', // Set the input value text color to black
  },
  iconButton: {
    position: 'absolute',
    right: 15,
    top: '30%', // Adjust position to be centered vertically
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default Download;
