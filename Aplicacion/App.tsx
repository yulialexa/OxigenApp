import React, {useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../OxigenApp/Aplicacion/Firebase/config';

import Login from './App/paginas/Login';
import Registro from './App/paginas/Registro';
import Mapa from './App/paginas/Mapa';

const Stack = createNativeStackNavigator();
const StackInterna = createNativeStackNavigator();

function diseñoInterno() {
  return(
    <SafeAreaView style={{flex: 1, marginTop: 24}}>
    <StackInterna.Navigator>
        <StackInterna.Screen name='Mapa' component={Mapa} options={{title: 'Mapa', headerShown:false}}/> 
    </StackInterna.Navigator>
    </SafeAreaView>
  )

}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
      });
    }, [])


  return (<NavigationContainer>
    <SafeAreaView style={{flex: 1, marginTop: 24}}>
    <Stack.Navigator initialRouteName="Login">
      {user ? (<Stack.Screen name='Interno' component={diseñoInterno} options={{headerShown: false}} />):
      ( <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />)  }
      
      <Stack.Screen name="Registro" component={Registro} options={{headerShown:false}} />
      
    </Stack.Navigator>
    </SafeAreaView>
  </NavigationContainer>);
   
}


