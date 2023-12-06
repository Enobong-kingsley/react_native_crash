import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from '../components/home/welcome/welcome.style'; // Import your styles

const TextInputWithIcon = ({ placeholder, icon }) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <View style={styles.iconWrapper}>
          <Image source={icon} style={styles.icon} />
        </View>
        <TextInput
          style={styles.searchInput}
          value=""
          onChange={() => {}}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export default TextInputWithIcon;
