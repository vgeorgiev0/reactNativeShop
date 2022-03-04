import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../constants/Colors';
import CartItem from '../components/shop/CartItem';
import * as cartActions from '../store/actions/cart';
import * as ordersActions from '../store/actions/order';

interface CartScreen {}

const CartScreen: React.FC<CartScreen> = (props: any) => {
  //@ts-ignore
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];

    // @ts-ignore
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        // @ts-ignore
        productTitle: state.cart.items[key].productTitle,
        // @ts-ignore
        productPrice: state.cart.items[key].productPrice,
        // @ts-ignore
        quantity: state.cart.items[key].quantity,
        // @ts-ignore
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });
  const dispatch = useDispatch();

  const truncate = (string: string) => {
    if (string.length > 16) {
      string = string.substring(0, 17) + '..';
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{'  '}
          <Text style={styles.amount}>
            ${cartTotalAmount >= 0 ? cartTotalAmount.toFixed(2) : '0.00'}
          </Text>
        </Text>
        <Button
          color={Colors.primary}
          onPress={() => {
            dispatch(ordersActions.addOrder(cartItems, cartTotalAmount));
            props.navigation.navigate('OrdersScreen');
          }}
          title='Order Now'
          disabled={cartItems.length === 0}
        />
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            deletable
            amount={itemData.item.sum}
            quantity={itemData.item.quantity}
            title={
              itemData.item.productTitle.length > 16
                ? itemData.item.productTitle.substring(0, 16) + '...'
                : itemData.item.productTitle
            }
            onRemove={() => {
              dispatch(cartActions.removeFromCart(itemData.item.productId));
            }}
          />
        )}
      />
      {/* <View>
        <Text>CART ITEMS</Text>
      </View> */}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
  amount: {
    color: Colors.accent,
  },
});
