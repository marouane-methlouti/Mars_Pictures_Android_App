import React from 'react';
import { Text, View, StyleSheet,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';
import Curiosity from './curiosity/curiosity';
import Opportunity from './opportunity/opportunity';
import Spirit from './Spirit/spirit';
import Home from './accueil/accueil';

const Tabs = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 15,
            marginBottom: 10,
          },
        }}
        initialRouteName="home">
        <Tabs.Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tabs.Screen
          name="curiosity"
          component={Curiosity}
          options={{
            tabBarLabel: 'Curiosity',
          }}
        />
        <Tabs.Screen
          name="opportunity"
          component={Opportunity}
          options={{
            tabBarLabel: 'Opportunity',
          }}
        />
        <Tabs.Screen
          name="spirit"
          component={Spirit}
          options={{
            tabBarLabel: 'Spirit',
          }}
        />
  
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
export default App;
