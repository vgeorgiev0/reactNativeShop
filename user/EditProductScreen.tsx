import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

type Props = {
  route: any;
  navigation: any;
};

const EditProductScreen = (props: Props) => {
  if (props.route.params) {
    const { productId } = props.route.params;
    const selectedProduct = useSelector((state: any) =>
      state.products.availableProducts.find(
        (prod: any) => prod.id === productId
      )
    );
    props.navigation.setOptions({ title: selectedProduct.title });
  }
  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            placeholder='Enter product title...'
            placeholderTextColor={'#3337'}
            style={styles.input}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image Url</Text>
          <TextInput
            placeholder='Enter image url...'
            placeholderTextColor={'#3337'}
            style={styles.input}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            placeholder='Enter product price...'
            placeholderTextColor={'#3337'}
            style={styles.input}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            placeholder='Enter product description...'
            placeholderTextColor={'#3337'}
            style={styles.input}
          />
        </View>
        {/* <Button
          title='Update the title'
          onPress={() => props.navigation.setOptions({ title: 'Updated!' })}
        /> */}
      </View>
    </ScrollView>
  );
};

export default EditProductScreen;

const styles = StyleSheet.create({
  form: { margin: 20 },
  formControl: {
    width: '100%',
  },
  label: { fontFamily: 'open-sans-bold', marginVertical: 8 },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
