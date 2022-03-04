import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../components/shop/ProductItem';
import Colors from '../constants/Colors';
import * as productsActions from '../store/actions/products';

const UserProductsScreen = (props: any) => {
  // @ts-ignore
  const userProducts = useSelector((state) => state.products.userProducts);
  const selectItemHandler = (id: string, title: string) => {
    props.navigation.navigate('ProductDetail', {
      productId: id,
      productTitle: title,
    });
  };
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={userProducts}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ProductItem
            onSelect={() => {
              // selectItemHandler(itemData.item.id, itemData.item.title);
            }}
            price={itemData.item.price}
            title={itemData.item.title}
            image={itemData.item.imageUrl}
          >
            <Button
              color={Colors.primary}
              title='Edit'
              onPress={() => {
                // selectItemHandler(itemData.item.id, itemData.item.title);
              }}
            />
            <Button
              color={Colors.primary}
              title='Delete'
              onPress={() => {
                dispatch(productsActions.deleteProduct(itemData.item.id));
              }}
            />
          </ProductItem>
        )}
      />
    </View>
  );
};

export default UserProductsScreen;

const styles = StyleSheet.create({});
