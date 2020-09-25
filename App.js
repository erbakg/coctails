import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
  import Coctails from './components/Coctails'
  import Recipe from './components/Recipe'
  import Ingredient from './components/Ingredient'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="Coctails" 
      component={Coctails}
      options={{ title: 'Coctails',
      headerStyle: {
        backgroundColor: '#000',
      }, 
      headerTintColor: '#fff', }}
      />
      <Stack.Screen
          name="Recipe"
          component={Recipe}
          options={{ title: 'Ingredients',
          headerStyle: {
            backgroundColor: '#000',
           
          }, 
          headerTintColor: '#fff', }}
        />
        <Stack.Screen
          name="Ingredient"
          component={Ingredient}
          options={{ title: 'Ingredients',
          headerStyle: {
            backgroundColor: '#000',
           
          }, 
          headerTintColor: '#fff', }}
        />
    </Stack.Navigator>
  </NavigationContainer>
    
  );
}

