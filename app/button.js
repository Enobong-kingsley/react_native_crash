import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../components/home/welcome/welcome.style'; // Import your styles

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
