import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from '@expo/vector-icons/Ionicons';
import { Text } from 'react-native';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import Favoritos from '../pages/Favoritos';
import TocandoMusica from '../pages/TocandoMusica';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#121212', borderBottomWidth: 0 },
        headerTintColor: '#FFF',
        tabBarStyle: { backgroundColor: '#1E1E1E', borderTopColor: '#333', paddingBottom: 5, height: 60 },
        tabBarActiveTintColor: '#ff0000',
        tabBarInactiveTintColor: '#888',
        tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
        tabBarIcon: ({ color, size, focused }) => {
            let iconName = 'ellipse-outline';

            if (route.name === 'Início') {
                iconName = focused ? 'home' : 'home-outline';
            }

            if (route.name === 'Favoritos') {
                iconName = focused ? 'heart' : 'heart-outline';
            }

            return <IonIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
    </Tab.Navigator>
  );
}

export default function Rotas() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="TocandoMusica" component={TocandoMusica} />
    </Stack.Navigator>
  );
}