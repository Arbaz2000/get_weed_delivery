// CustomModal.js
import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CommonButton from './button'; // Make sure the button component is correctly imported.

const CustomModal = ({
  visible,
  imageSource,
  message,
  onClose,
  retryAction,
  retryButtonText,
}) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.modalContainer}>
        {imageSource && <Image source={imageSource} style={styles.image} />}
        {message && <Text style={styles.message}>{message}</Text>}
        <CommonButton
          title={retryButtonText || 'Retry'}
          onPress={retryAction}
          style={styles.retryButton}
        />
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    marginTop: 10,
    backgroundColor: 'red',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
  },
  closeText: {
    fontSize: 18,
    color: 'gray',
  },
});

export default CustomModal;
