import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as BlogProvider } from "./src/context/blogContext";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";

const Stack = createStackNavigator();

function App ()
{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ IndexScreen }
          options={ { title: 'Blog App' } }
        />
        <Stack.Screen
          name="Post"
          component={ ShowScreen }
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default () =>
{
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
