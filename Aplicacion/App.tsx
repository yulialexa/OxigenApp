import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './App/paginas/Login';
import Registro from './App/paginas/Registro';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (<NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Registro" component={Registro} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>);
   

}


