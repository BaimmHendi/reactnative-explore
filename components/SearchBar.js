import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import iconSet from '@expo/vector-icons/build/Fontisto';
import { Fontisto } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View className="ga">
    <Fontisto name='search' size={24} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for products"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  icon:{
    marginRight:10
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    fontFamily:'PlusJakartaSans-Bold',
  },
});

export default SearchBar;
