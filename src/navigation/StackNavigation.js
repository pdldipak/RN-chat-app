import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import Header from '../components/Header';
import { theme } from '../utils/theme';
import ChatScreen from '../screens/chat/ChatScreen';
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitle: () => <Header title="Login" />,
            headerStyle: {
              backgroundColor: theme.colors.backgroundColor,
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerTitle: () => <Header title="Register" />,
            headerStyle: { backgroundColor: theme.colors.backgroundColor },
          }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerTitle: () => <Header title="Chat" />,
            headerStyle: { backgroundColor: theme.colors.backgroundColor },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
