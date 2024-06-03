import { View, Text } from 'react-native'
import React from 'react'
import Splash from './screen/Splash'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screen/Home';

import CameraScreen from './screen/camera';

const Stack = createNativeStackNavigator();



const App = () => {
  return (
    //<Splash /> 
    //returnหน้าsplash
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}>
        </Stack.Screen>


        <Stack.Screen name="Home" component={Home} options={{title: 'Welcome'}}>
        </Stack.Screen>

        <Stack.Screen name="Camera" component={CameraScreen} 
        />
                                                      
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App