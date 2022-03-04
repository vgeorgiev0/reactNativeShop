import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../components/shop/ProductItem';

type Props = {};

const UserProductsScreen = (props: Props) => {
  // @ts-ignore
  const userProducts = useSelector((state) => state.products.userProducts);

  return (
    <View>
      <FlatList
        data={userProducts}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ProductItem
            onAddToCart={() => {
              console.log('s');
            }}
            onViewDetails={() => {
              console.log('s');
            }}
            price={itemData.item.price}
            title={itemData.item.title}
            image={itemData.item.imageUrl}
          />
        )}
      />
    </View>
  );
};

export default UserProductsScreen;

const styles = StyleSheet.create({});
