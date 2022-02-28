import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

interface HeaderButton {
  navigation: any;
}

const HeaderButton: React.FC<HeaderButton> = ({ navigation }) => {
  const colorScheme = useColorScheme();
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate('Cart')}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <FontAwesome
          name='shopping-cart'
          size={25}
          color={Colors[colorScheme].text}
          style={{ marginRight: 15 }}
        />
      </Pressable>
    </View>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({});
