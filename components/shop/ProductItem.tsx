import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

type Props = {
  image: string;
  title: string;
  price: number;
  onSelect: () => void | null;
  children: any;
};

const ProductItem = (props: Props) => {
  let TouchableCmp: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <Image style={styles.image} source={{ uri: props.image }} />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            <View style={styles.buttonContainer}>{props.children}</View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '60%',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    marginTop: 16,
    marginHorizontal: 12,
    marginVertical: 2,
    textAlign: 'center',
    color: 'black',
  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 16,
    marginHorizontal: 12,
    paddingBottom: 10,
    color: '#888',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },
});

export default ProductItem;
