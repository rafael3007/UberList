
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

//pages
import Home from './screens/Home/Home';
import Veiculos from './screens/Veiculos/';
import Motoristas from './screens/Motoristas/';
import Motorista from './screens/Motoristas/Motorista/';
import Veiculo from './screens/Veiculos/Veiculo/';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Motoristas" component={Motoristas} />
        <Stack.Screen name="Veiculos" component={Veiculos} />
        <Stack.Screen name="Motorista" component={Motorista} />
        <Stack.Screen name="Veiculo" component={Veiculo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;