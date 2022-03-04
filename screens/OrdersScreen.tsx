import { FlatList, Image, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from '../components/shop/OrderItem';

type Props = {};

const OrdersScreen = (props: Props) => {
  // @ts-ignore
  const orders = useSelector((state) => state.orders.orders);
  // console.log(orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    />
  );
};

export default OrdersScreen;
