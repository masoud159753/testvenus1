import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestScreen from "./pages/Test";
import { store } from './src/app/store';
import { Provider } from 'react-redux';

console.disableYellowBox = true;

const Stack = createNativeStackNavigator();

const App = () => {

  return (
      <Provider store={store}>

              <NavigationContainer>

                <Stack.Navigator>
                    <Stack.Screen name="TestScreen" component={TestScreen} options={{
                        title: 'Groceries',
                        headerStyle: {backgroundColor:'#dedede',height:30}
                    }} />
                </Stack.Navigator>

              </NavigationContainer>

      </Provider>

  );
};

export default App;


