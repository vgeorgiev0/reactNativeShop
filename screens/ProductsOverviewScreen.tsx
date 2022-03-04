import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../components/shop/ProductItem';
import Products from '../models/product';
import * as cartActions from '../store/actions/cart';
import Colors from '../constants/Colors';

// type Props = {
//   navigation: any;
// };

const ProductsOverviewScreen = (props: any) => {
  //@ts-ignore
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const selectItemHandler = (id: string, title: string) => {
    props.navigation.navigate('ProductDetail', {
      productId: id,
      productTitle: title,
    });
  };
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item: Products) => item.id}
        renderItem={(itemData) => (
          <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
          >
            <Button
              color={Colors.primary}
              title='View Details'
              onPress={() => {
                selectItemHandler(itemData.item.id, itemData.item.title);
              }}
            />
            <Button
              color={Colors.primary}
              title='Add to Cart'
              onPress={() => {
                dispatch(cartActions.addToCart(itemData.item));
              }}
            />
          </ProductItem>
        )}
      />
    </View>
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
