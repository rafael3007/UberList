
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

//pages
import Home from './src/screens/Home/Home';
import Veiculos from './src/screens/Veiculos/';
import Motoristas from './src/screens/Motoristas/';
import Motorista from './src/screens/Motoristas/Motorista/';
import Veiculo from './src/screens/Veiculos/Veiculo/';

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