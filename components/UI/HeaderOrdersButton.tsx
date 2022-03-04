import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { useSelector } from 'react-redux';

interface HeaderButton {
  navigation: any;
}

const HeaderOrdersButton: React.FC<HeaderButton> = ({ navigation }) => {
  // @ts-ignore
  const orders = useSelector((state) => state.orders.orders);
  const colorScheme = useColorScheme();
  return (
    <View style={{ paddingLeft: 10 }}>
      {orders.length > 0 && (
        <Pressable
          onPress={() => navigation.navigate('OrdersScreen')}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <FontAwesome
            name='first-order'
            size={25}
            color={Colors[colorScheme].text}
            style={{ marginRight: 15 }}
          />
        </Pressable>
      )}
    </View>
  );
};

export default HeaderOrdersButton;

const styles = StyleSheet.create({});
