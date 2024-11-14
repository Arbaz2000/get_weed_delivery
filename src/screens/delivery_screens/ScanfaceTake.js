import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Scanface from '../../asset/SVG/Scanface.png';
import CommonButton from '../../component/button';
import amazing from '../../asset/amazing.png';
import facedontMatch from '../../asset/facedontMatch.png';
import error from '../../asset/error.png';

const {width} = Dimensions.get('window');

const ScanFaceJs = () => {
  const navigation = useNavigation();
  const [showAmazingImage, setShowAmazingImage] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false); // State for error pop-up

  // Effect to hide the amazing image after 3 seconds
  useEffect(() => {
    if (showAmazingImage) {
      const timer = setTimeout(() => {
        setShowAmazingImage(false);
      }, 3000); // Close after 3 seconds
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [showAmazingImage]);

  // Handle the "Next" button click
  const handleNextPress = () => {
    setShowAmazingImage(true); // Show the amazing image
  };

  // Handle the image click to show the error popup
  const handleImageClick = () => {
    setShowErrorPopup(true); // Show the error popup
  };

  // Handle the retry action
  const handleRetry = () => {
    setShowErrorPopup(false); // Close the error popup
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
        <Text style={styles.title}>Scan Face</Text>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handleImageClick}>
            <Image source={Scanface} style={styles.logo} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <CommonButton title="Next" onPress={handleNextPress} />
        </View>

        {/* Amazing Image Popup */}
        {showAmazingImage && (
          <View style={styles.popupContainer}>
            <View style={styles.popup}>
              <Image source={amazing} style={styles.amazingImage} />
            </View>
          </View>
        )}

        {/* Error Popup */}
        {showErrorPopup && (
          <View style={styles.overlay}>
            <View style={styles.errorPopupContainer}>
              <View style={styles.errorPopup}>
                <Image source={error} style={styles.errorImage} />
                <Text style={styles.errorMessage}>OPPPS</Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: 20,
                  }}>
                  The face does not match, Try again!
                </Text>
                <CommonButton
                  title="Retry"
                  onPress={handleRetry}
                  style={styles.retryButton}
                  textColor="red" // Pass the retryButton style
                />
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ScanFaceJs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 70,
  },
  buttonContainer: {
    marginTop: 100,
    width: width * 0.85,
    paddingBottom: 30,
  },
  imageContainer: {
    width: 296,
    height: 296,
    padding: 48,
    marginTop: 90,
    borderRadius: 62,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '0px 4px 4px 0px rgba(0, 0, 0, 0.85)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 8,
  },
  logo: {
    width: 200,
    height: 200,
    marginRight: 5,
    marginTop: 5,
    marginBottom:5,
    marginLeft:5,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 22,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',
    lineHeight: 26.63,
    textAlign: 'center',
    paddingTop: 70,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  popupContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%', // Full width of the screen
    height: '130%', // Full height of the screen
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black background with opacity
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999, // Ensure it appears above all other content
  },
  popup: {
    backgroundColor: 'transparent',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorImage: {width: 150, height: 150, resizeMode: 'contain'},
  amazingImage: {
    width: 350,
    height: 350,
    resizeMode: 'contain', // Makes sure the image doesn't distort
  },
  // Styles for error pop-up
  errorPopupContainer: {
    position: 'absolute',
    top: '40%', // Position from the top 50% of the viewport
    left: '50%', // Position from the left 50% of the viewport
    width: '80%',
    height: '40%',
    backgroundColor: '#ff3636', // Red background with opacity
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    zIndex: 9999, // Ensure it appears above all other content
    marginTop: '-25%', // Offset by half of the height to center vertically
    marginLeft: '-40%', // Offset by half of the width to center horizontally
  },
  errorPopup: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  errorMessage: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -30,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%', // Full width of the screen
    height: '130%', // Full height of the screen
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black background with opacity
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    zIndex: 9999, // Ensure it appears above all other content
  },
  // Retry button styles
  retryButton: {
    width: 100, // Make the button wider (80% of container width)
    backgroundColor: 'white', // White background
    borderColor: '#ccc', // Light border color (you can customize it)
    borderWidth: 1, // Border width
    marginTop: 10, // Spacing from error message
    // Add vertical padding to make the button taller
  },
});
