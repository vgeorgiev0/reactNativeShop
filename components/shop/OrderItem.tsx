import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import { useState } from 'react';
import CartItem from './CartItem';

type Props = {
  date: Date;
  amount: number;
  items: any;
};

const OrderItem = (props: Props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>{props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button
        color={Colors.primary}
        onPress={() => {
          setShowDetails((prevState) => !prevState);
        }}
        title={showDetails ? 'Hide Details' : 'Show Details'}
      />
      {showDetails && (
        <View style={styles.detailItems}>
          {props.items.map((cartItem: any) => (
            <CartItem
              deletable={false}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
              key={cartItem.productId}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  totalAmount: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    fontFamily: 'open-sans',
    color: '#888',
  },
  detailItems: {
    width: '100%',
  },
});
