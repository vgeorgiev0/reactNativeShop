import { FlatList, Image, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

type Props = {};

const OrdersScreen = (props: Props) => {
  // @ts-ignore
  const orders = useSelector((state) => state.orders.orders);
  console.log(orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <Text style={{ paddingTop: 20, color: 'black' }}>
          {itemData.item.totalAmount.length < 1 ? (
            <Text>You don't have any orders yet</Text>
          ) : (
            <View>
              {/* <Text>{itemData.item.productTitle}</Text> */}
              <Text>{itemData.item.totalAmount}</Text>
            </View>
          )}
        </Text>
      )}
    />
  );
};

export default OrdersScreen;
