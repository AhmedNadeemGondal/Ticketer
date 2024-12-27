import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS, ROUTES } from '../constants';
import HomeStack from './HomeStack';
import AddTicketStack from './AddTicketStack';
import CustomTabBarButton from '../components/CustomTabBarButton';
import SettingStack from './SettingStack';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabStyle,
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeStack}
        options={{
          tabBarActiveTintColor: COLORS.darkgreen,
          tabBarInactiveTintColor: COLORS.dark,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'home-sharp' : 'home-outline'}
              size={30}
              color={color}
              style={{
                borderBottomColor: focused ? COLORS.darkgreen : 'transparent',
                borderBottomWidth: 2,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.ADD_TICKET}
        component={AddTicketStack}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarActiveTintColor: COLORS.white,
          tabBarInactiveTintColor: COLORS.dark,
          tabBarIcon: ({ color }) => <Icon name={'add-sharp'} size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS}
        component={SettingStack}
        options={{
          tabBarActiveTintColor: COLORS.darkgreen,
          tabBarInactiveTintColor: COLORS.dark,
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Icon
                name={focused ? 'settings' : 'settings-outline'}
                size={30}
                color={color}
                style={{
                  borderBottomColor: focused ? COLORS.darkgreen : 'transparent',
                  borderBottomWidth: 2,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    position: 'absolute',
    backgroundColor: COLORS.lightgreen,
    height: 60,
    borderWidth: 0,
    borderRadius: 50,
    marginHorizontal: 40,
    marginBottom: 15,
    elevation: 0,
  },
});
