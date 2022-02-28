import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../components/shop/ProductItem';
import Products from '../models/product';
import * as cartActions from '../store/actions/cart';

// type Props = {
//   navigation: any;
// };

const ProductsOverviewScreen = ({ navigation }: any) => {
  //@ts-ignore
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
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
            onAddToCart={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
            onViewDetails={() => {
              navigation.navigate('ProductDetail', {
                productId: itemData.item.id,
                productTitle: itemData.item.title,
              });
            }}
          />
        )}
      />
    </View>
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
