import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import arrow from '../asset/icons/arrow.png'; // Adjust the path as necessary

const Accordion = ({title, items, onSelect, isOpen, toggle}) => {
  const [flashedItemIndex, setFlashedItemIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(title); // Initially, display the title in the header

  const handleItemClick = (item, index) => {
    // Flash the clicked item for 300ms
    setFlashedItemIndex(index);
    setSelectedItem(item.item); // Update the selected item in the header
    onSelect(item.item);

    setTimeout(() => {
      setFlashedItemIndex(null); // Reset flash after 300ms
      toggle(); // Close the accordion after selection
    }, 300); // Flash duration
  };

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity style={styles.accordionHeader} onPress={toggle}>
        <View
          style={[styles.accordionInput, isOpen && styles.accordionInputOpen]}>
          <Text style={styles.accordionTitle}>{selectedItem}</Text>
          <Image source={arrow} style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View
          style={[
            styles.accordionContent,
            isOpen && styles.accordionContentOpen,
          ]}>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleItemClick(item, index)}
              style={[
                styles.accordionItemContainer,
                flashedItemIndex === index && styles.itemFlashed, // Apply flash effect
              ]}>
              {item.icon && (
                <Image source={item.icon} style={styles.itemIcon} />
              )}
              <Text style={styles.accordionItem}>{item.item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    marginVertical: 10,
  },
  accordionHeader: {
    padding: 0,
  },
  accordionInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    backgroundColor: 'white',
  },
  accordionInputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  accordionTitle: {
    fontSize: 12,
    color: 'gray',
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  accordionContent: {
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#AFAFAF',
  },
  accordionContentOpen: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  accordionItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 10,
  },
  itemIcon: {
    width: 20,
    height: 20,
    marginRight: 10, // Space between icon and text
  },
  accordionItem: {
    fontSize: 16,
    color: '#AFAFAF',
  },
  itemFlashed: {
    backgroundColor: '#409C59',
    borderRadius: 10,
    opacity: 1,
  },
});

export default Accordion;
