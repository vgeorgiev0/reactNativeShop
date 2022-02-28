import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import useColorScheme from '../../hooks/useColorScheme';
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  quantity: number;
  title: string;
  amount: number;
  onRemove?: () => void;
};

const CartItem = (props: Props) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>({props.quantity}) </Text>
        <Text style={styles.mainText}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
        <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
          <FontAwesome name='trash' size={25} color='red' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: 'open-sans',
    color: '#888',
    fontSize: 16,
  },
  mainText: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 20,
  },
});
