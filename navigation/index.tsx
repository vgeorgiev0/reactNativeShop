import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import CartScreen from '../screens/CartScreen';
import HeaderButton from '../components/UI/HeaderButton';
import OrdersScreen from '../screens/OrdersScreen';
import HeaderOrdersButton from '../components/UI/HeaderOrdersButton';
import UserProductsScreen from '../user/UserProductsScreen';
import EditProductScreen from '../user/EditProductScreen';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Drawer = createDrawerNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          headerTitleStyle: {
            fontFamily: 'open-sans-bold',
            color: Colors.primary,
          },
        }}
      />
      <Stack.Screen
        name='ProductsOverview'
        component={ProductsOverviewScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Screen
        name='ProductDetail'
        component={ProductDetailScreen}
        options={({ route, navigation }) => ({
          title: route.params.productTitle,
          headerTitleStyle: {
            fontFamily: 'open-sans-bold',
            color: Colors.primary,
          },
          headerBackTitleStyle: {
            fontFamily: 'open-sans',
          },
          headerRight: () => (
            <HeaderButton
              // @ts-ignore
              onPress={() => {
                navigation.navigate('Cart');
              }}
              icon={'shopping-cart'}
            />
          ),
        })}
      />

      <Stack.Screen
        name='OrdersScreen'
        component={OrdersScreen}
        options={{ title: 'Your Order' }}
      />
      <Stack.Screen
        name='EditProductScreen'
        component={EditProductScreen}
        options={({ route, navigation }) => ({
          title: 'Add Product',
          headerTitleStyle: {
            fontFamily: 'open-sans-bold',
            color: Colors.primary,
          },
          headerBackTitleStyle: {
            fontFamily: 'open-sans',
          },
          headerRight: () => (
            <HeaderButton
              // @ts-ignore
              onPress={() => {
                navigation.navigate('UserProductsScreen');
              }}
              icon={'check'}
            />
          ),
        })}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name='Cart'
          component={CartScreen}
          options={({}) => ({
            headerTitleStyle: {
              color: Colors.primary,
              fontSize: 24,
              paddingHorizontal: 25,
              fontFamily: 'open-sans-bold',
            },
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='ProductsOverview'
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <BottomTab.Screen
        name='ProductsOverview'
        component={ProductsOverviewScreen}
        options={({ navigation }: RootTabScreenProps<'ProductsOverview'>) => ({
          title: 'Products Overview',
          headerTitleStyle: {
            color: Colors.primary,
            fontSize: 24,
            paddingHorizontal: 10,
            fontFamily: 'open-sans-bold',
          },
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='pagelines' color={color} />
          ),
          headerRight: () => (
            <HeaderButton
              // @ts-ignore
              onPress={() => {
                // @ts-ignore
                navigation.navigate('Cart');
              }}
              icon={'shopping-cart'}
            />
          ),
          headerLeft: () => <HeaderOrdersButton navigation={navigation} />,
        })}
      />
      <BottomTab.Screen
        name='UserProductsScreen'
        component={UserProductsScreen}
        options={({
          navigation,
        }: RootTabScreenProps<'UserProductsScreen'>) => ({
          title: 'User Products',
          headerTitleStyle: {
            color: Colors.primary,
            fontSize: 24,
            paddingHorizontal: 10,
            fontFamily: 'open-sans-bold',
          },
          tabBarIcon: ({ color }) => <TabBarIcon name='user' color={color} />,
          headerRight: () => (
            <HeaderButton
              // @ts-ignore
              onPress={() => {
                // @ts-ignore
                navigation.navigate('EditProductScreen');
              }}
              icon={'plus'}
              path={'EditProductScreen'}
            />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -10 }} {...props} />;
}
