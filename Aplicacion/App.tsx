import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../OxigenApp/Aplicacion/Firebase/config';

import Login from './App/paginas/Login';
import Registro from './App/paginas/Registro';
import Mapa from './App/paginas/Mapa';
import ZonaVerde from './App/paginas/Zonas/ZonaVerde';
import ZonaRosa from './App/paginas/Zonas/ZonaRosa';
import ZonaAzul from './App/paginas/Zonas/ZonaAzul';

const Stack = createNativeStackNavigator();
const StackInterna = createNativeStackNavigator();

function DiseñoInterno() {
  return(
    
    <StackInterna.Navigator>
        <StackInterna.Screen name='Mapa' component={Mapa} options={{title: 'Mapa', headerShown:false}}/> 
        <StackInterna.Screen name='ZonaVerde' component={ZonaVerde} options={{title: 'ZonaVerde', headerShown:false}}/> 
        <StackInterna.Screen name='ZonaRosa' component={ZonaRosa} options={{title: 'ZonaRosa', headerShown:false}}/> 
        <StackInterna.Screen name='ZonaAzul' component={ZonaAzul} options={{title: 'ZonaAzul', headerShown:false}}/> 
    </StackInterna.Navigator>

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

    <Stack.Navigator initialRouteName="Login">
      {user ? (<Stack.Screen name='Interno' component={DiseñoInterno} options={{headerShown: false}} />):
      ( <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />)  }
      
      <Stack.Screen name="Registro" component={Registro} options={{headerShown:false}} />
      
    </Stack.Navigator>

  </NavigationContainer>);
   
}


