import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './Firebase/config';

import Login from './App/paginas/Login';
import Registro from './App/paginas/Registro';
import Mapa from './App/paginas/Mapa';
import ZonaVerde from './App/paginas/Zonas/ZonaVerde';
import ZonaRosa from './App/paginas/Zonas/ZonaRosa';
import ZonaAzul from './App/paginas/Zonas/ZonaAzul';
import OlvidarContraseña from './App/paginas/OlvidarContraseña';
//Comunas zonas verdes
import Comuna1 from './App/paginas/Comunas/Zona Verde/Comuna1';
import Comuna2 from './App/paginas/Comunas/Zona Verde/Comuna2';
import Comuna11 from './App/paginas/Comunas/Zona Verde/Comuna11';
import Comuna20 from './App/paginas/Comunas/Zona Verde/Comuna20';



const Stack = createNativeStackNavigator();
const StackInterna = createNativeStackNavigator();


function DiseñoInterno() {
  return(
    
    <StackInterna.Navigator>
        <StackInterna.Screen name='Mapa' component={Mapa} options={{title: 'Mapa', headerShown:false}}/> 
        <StackInterna.Screen name='ZonaVerde' component={ZonaVerde} options={{title: 'ZonaVerde', headerShown:false}}/> 
        <StackInterna.Screen name='ZonaRosa' component={ZonaRosa} options={{title: 'ZonaRosa', headerShown:false}}/> 
        <StackInterna.Screen name='ZonaAzul' component={ZonaAzul} options={{title: 'ZonaAzul', headerShown:false}}/> 

        {/* Comunas Verdes Stacks */}
        <StackInterna.Screen name='Comuna1' component={Comuna1} options={{headerShown: false}}/>
        <StackInterna.Screen name='Comuna2' component={Comuna2} options={{headerShown: false}}/>
        <StackInterna.Screen name='Comuna11' component={Comuna11} options={{headerShown: false}}/>
        <StackInterna.Screen name='Comuna20' component={Comuna20} options={{headerShown: false}}/>


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
      <Stack.Screen name='olvidarContraseña' component={OlvidarContraseña} options={{headerShown: false}}/>
      <Stack.Screen name="Registro" component={Registro} options={{headerShown:false}} />
      
    </Stack.Navigator>

  </NavigationContainer>);
   
}


