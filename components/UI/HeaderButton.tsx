import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

interface HeaderButton {
  props: any;
}

const HeaderButton: React.FC<HeaderButton> = (props: any) => {
  const colorScheme = useColorScheme();
  return (
    <View>
      <Pressable
        onPress={props.onPress}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <FontAwesome
          name={props.icon}
          size={25}
          color={Colors[colorScheme].text}
          style={{ marginRight: 15 }}
        />
      </Pressable>
    </View>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({});
