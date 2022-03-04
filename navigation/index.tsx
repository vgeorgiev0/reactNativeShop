/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
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
import { ColorSchemeName, Dimensions, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
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

const { width } = Dimensions.get('window');

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

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
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
          headerRight: () => <HeaderButton navigation={navigation} />,
          // headerLeft: () => <HeaderOrdersButton navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name='OrdersScreen'
        component={OrdersScreen}
        options={{ title: 'Your Order' }}
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

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
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
          headerRight: () => <HeaderButton navigation={navigation} />,
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
          headerRight: () => <HeaderButton navigation={navigation} />,
          headerLeft: () => <HeaderOrdersButton navigation={navigation} />,
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
