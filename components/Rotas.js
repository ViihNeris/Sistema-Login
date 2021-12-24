import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Cadastro from './Cadastro';
import Home from './Home';
import Login from './Login';

const Stack = createStackNavigator();

export default function Rotas (){
  return(
    <Stack.Navigator>
      <Stack.Screen name = "Login" component = {Login} options = {{headerShown: false, title: 'Login'}}/>
      <Stack.Screen name = "Cadastro" component = {Cadastro} options = {{headerShown: false, title: 'Cadastro'}}/>
      <Stack.Screen name = "Home" component = {Home} options = {{headerShown: false, title: 'Home'}}/>
    </Stack.Navigator>
  );
}