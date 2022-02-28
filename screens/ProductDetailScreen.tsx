import {
  StyleSheet,
  Text,
  Image,
  Button,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../components/shop/ProductItem';
import { CommonActions } from '@react-navigation/native';
import Colors from '../constants/Colors';

const ProductDetailScreen = ({ route, navigation }: any) => {
  const { productId } = route.params;
  const selectedProduct = useSelector((state: any) =>
    state.products.availableProducts.find((prod: any) => prod.id === productId)
  );

  return (
    <View>
      <ScrollView>
        <Image
          style={styles.image}
          source={{ uri: selectedProduct.imageUrl }}
        />
        <View style={styles.actions}>
          <Button
            color={Colors.primary}
            title='Add to Cart'
            onPress={() => {
              console.log('ADD');
            }}
          />
        </View>
        <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
      </ScrollView>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: 'open-sans-bold',
  },
});
