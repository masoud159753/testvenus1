import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestScreen from "./pages/Test";

console.disableYellowBox = true;

const Stack = createNativeStackNavigator();

const App = () => {

  return (
      <NavigationContainer>

        <Stack.Navigator>
            <Stack.Screen name="TestScreen" component={TestScreen} options={{
                title: 'Groceries',
                headerStyle: {backgroundColor:'#dedede',height:30}
            }} />
        </Stack.Navigator>

      </NavigationContainer>
  );
};

export default App;


