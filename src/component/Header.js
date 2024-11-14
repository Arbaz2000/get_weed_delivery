import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import backArrow from '../asset/icons/greerArrowLeft.png';

const Header = ({
    title,
    isLeft,
    isRight,
    leftPress,
    rightPress,
}) => {
    const buttonContainer = (styleProp, onPress) => (
        <TouchableOpacity
            //   onPress={() => onPress()}
            style={[
                //   styles.common_style,
                styleProp === 'left' ? styles.button_style : styles.right_button_style,
            ]}
            activeOpacity={0.7}>
            <Image source={backArrow} style={styles.arrow_icon} />
        </TouchableOpacity>
    );
    return (
        <View style={[styles.headerContainer]}>
            {buttonContainer('left', leftPress)}
            <Text style={styles.title}>Send Money</Text>
            {buttonContainer('right', rightPress)}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        position: 'relative',
        width: '100%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 20,
    },
    button_style: {
        backgroundColor: 'white', // or any background color you prefer
        borderRadius: 10, // rounded corners (adjust as needed)
        padding: 10, // adjust padding for better appearance
        shadowColor: '#000', // shadow color for iOS
        shadowOffset: { width: 0, height: 2 }, // shadow position for iOS
        shadowOpacity: 0.25, // shadow opacity for iOS
        shadowRadius: 3.5, // shadow spread for iOS
        elevation: 5, // shadow for Android
        position: 'absolute',
        left: 5,
    },
    right_button_style: {
        backgroundColor: 'white', // or any background color you prefer
        borderRadius: 10, // rounded corners (adjust as needed)
        padding: 10, // adjust padding for better appearance
        shadowColor: '#000', // shadow color for iOS
        shadowOffset: { width: 0, height: 2 }, // shadow position for iOS
        shadowOpacity: 0.25, // shadow opacity for iOS
        shadowRadius: 3.5, // shadow spread for iOS
        elevation: 5, // shadow for Android
        position: 'absolute',
        right: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        // flex: 1,
        color: 'black',
        // marginLeft: -36,
        borderWidth: 2,
    },
    arrow_icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});
