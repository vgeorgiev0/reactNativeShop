import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

type Props = {};

const ProductsOverviewScreen = (props: Props) => {
  //@ts-ignore
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <Text>{itemData.item.title} </Text>}
      />
    </View>
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
