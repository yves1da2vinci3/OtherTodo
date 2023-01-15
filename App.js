import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import AddTodoScreen from './Screens/AddTodoScreen';
import { Provider } from 'react-redux';
import store from './Redux/Store';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>

    
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: true }} >
      
      <Stack.Screen options={{ headerShown: false }} name="home" component={HomeScreen} />
      <Stack.Screen name="detail" component={DetailsScreen} />
      <Stack.Screen name="add" component={AddTodoScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}



