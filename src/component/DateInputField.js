// DateInputField.js
import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FloatingLabelInput from '../component/TextInput'; // Assuming you have a floating label input component
import Calender from '../asset/icons/calender.png'; // Calendar icon path

const DateInputField = ({
  label,
  value,
  onDateChange,
  isDatePickerVisible,
  showDatePicker,
  hideDatePicker,
}) => {
  // Handler when a date is confirmed
  const handleConfirm = date => {
    onDateChange(date); // Set the selected date
    hideDatePicker(); // Close the picker
  };

  return (
    <View style={styles.container}>
      <FloatingLabelInput
        label={label}
        value={value ? value.toDateString() : ''} // Show the selected date
        editable={false} // Make the input uneditable directly
        style={styles.input} // Apply custom style to the input
      />
      <TouchableOpacity
        style={styles.iconButton}
        onPress={showDatePicker} // Open the date picker
      >
        <Image source={Calender} style={styles.icon} />
      </TouchableOpacity>

      {/* DatePicker Modal */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm} // Handle selected date
        onCancel={hideDatePicker} // Handle cancel
        date={value || new Date()} // Default to current date if no date selected
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingRight: 10,
    width: '47%', // Make it take the full width of its container
  },
  input: {
    width: '100%', // Make input field wider
    borderWidth: 1, // Border width
    borderColor: 'green', // Green border color
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

export default DateInputField;
