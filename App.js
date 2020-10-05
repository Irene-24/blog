import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from "./src/screens/IndexScreen";

const Stack = createStackNavigator();

export default function App ()
{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ IndexScreen }
          options={ { title: 'Blog App' } }
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
